# Script de deploy para VPS
#!/bin/bash

echo "🚀 Iniciando deploy do AcessaPsi..."

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
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

# Verificar se está no diretório correto
if [ ! -f "package.json" ]; then
    error "Arquivo package.json não encontrado. Execute este script no diretório raiz do projeto."
    exit 1
fi

# Parar aplicações PM2 se estiverem rodando
log "Parando aplicações existentes..."
pm2 stop patient-web 2>/dev/null || true

# Atualizar código
log "Atualizando código do repositório..."
git pull origin main

# Instalar dependências
log "Instalando dependências..."
npm ci

# Build das aplicações
log "Construindo aplicações..."
npm run build

if [ $? -ne 0 ]; then
    error "Falha no build. Deploy cancelado."
    exit 1
fi

# Criar diretório de logs se não existir
mkdir -p logs

# Iniciar aplicações com PM2
log "Iniciando aplicações com PM2..."
pm2 start ecosystem.config.js

# Salvar configuração PM2
pm2 save

# Verificar status
log "Status das aplicações:"
pm2 status

log "✅ Deploy concluído com sucesso!"
log "🌐 Patient Web: http://localhost:3000"
log ""
log "Para ver logs: pm2 logs"
log "Para monitorar: pm2 monit"
