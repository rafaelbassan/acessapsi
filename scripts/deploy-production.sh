#!/bin/bash

# Script de deploy para produção com foco em resolver problemas de chunk loading
set -e

echo "🚀 Iniciando deploy de produção do AcessaPsi..."

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Função para log
log() {
    echo -e "${GREEN}[DEPLOY]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

# Verificar se está no diretório correto
if [ ! -f "package.json" ]; then
    error "Arquivo package.json não encontrado. Execute este script no diretório raiz do projeto."
    exit 1
fi

# Parar aplicações PM2 se estiverem rodando
log "Parando aplicações existentes..."
pm2 stop patient-web 2>/dev/null || true
pm2 delete patient-web 2>/dev/null || true

# Atualizar código
log "Atualizando código do repositório..."
git fetch origin
git reset --hard origin/main

# Limpar caches antigos
log "Limpando caches..."
npm run clean 2>/dev/null || true
rm -rf node_modules/.cache
rm -rf apps/patient-web/.next
rm -rf apps/patient-web/node_modules/.cache

# Instalar dependências limpas
log "Instalando dependências..."
rm -rf node_modules
rm -rf apps/patient-web/node_modules
npm ci

# Build das aplicações com variáveis de ambiente de produção
log "Construindo aplicações para produção..."
export NODE_ENV=production
export NEXT_TELEMETRY_DISABLED=1

# Build apenas a aplicação patient-web
cd apps/patient-web
npm run build

if [ $? -ne 0 ]; then
    error "Falha no build. Deploy cancelado."
    exit 1
fi

cd ../..

# Verificar se os arquivos estáticos foram gerados corretamente
log "Verificando arquivos estáticos..."
if [ ! -d "apps/patient-web/.next/static" ]; then
    error "Diretório de arquivos estáticos não foi criado."
    exit 1
fi

static_files=$(find apps/patient-web/.next/static -name "*.js" | wc -l)
info "Encontrados $static_files arquivos JavaScript estáticos"

if [ $static_files -eq 0 ]; then
    error "Nenhum arquivo JavaScript estático foi gerado."
    exit 1
fi

# Criar diretório de logs se não existir
mkdir -p logs

# Criar backup dos logs antigos
if [ -f "logs/patient-web-combined.log" ]; then
    mv logs/patient-web-combined.log logs/patient-web-combined.log.$(date +%Y%m%d_%H%M%S)
fi

# Iniciar aplicações com PM2
log "Iniciando aplicação com PM2..."
pm2 start ecosystem.config.js

# Aguardar inicialização
sleep 5

# Verificar se a aplicação está rodando
log "Verificando status da aplicação..."
if pm2 list | grep -q "patient-web.*online"; then
    log "✅ Aplicação iniciada com sucesso"
else
    error "❌ Falha ao iniciar a aplicação"
    pm2 logs patient-web --lines 20
    exit 1
fi

# Salvar configuração PM2
pm2 save

# Verificar status
log "Status das aplicações:"
pm2 status

# Teste de saúde básico
log "Executando teste de saúde..."
sleep 3
if curl -f -s http://localhost:3000/api/health >/dev/null; then
    log "✅ Teste de saúde passou"
else
    warn "⚠️ Teste de saúde falhou, mas aplicação pode estar inicializando"
fi

log "✅ Deploy concluído com sucesso!"
log "🌐 Patient Web: http://localhost:3000"
log ""
log "Para ver logs: pm2 logs patient-web"
log "Para monitorar: pm2 monit"
log "Para parar: pm2 stop patient-web"

# Mostrar os últimos logs
info "Últimos logs da aplicação:"
pm2 logs patient-web --lines 10 --nostream
