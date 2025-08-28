#!/bin/bash

# Script de build manual (sem turbo)
echo "🏗️ Building AcessaPsi apps manually..."

# Cores
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

log() {
    echo -e "${GREEN}[BUILD]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Verificar se está no diretório correto
if [ ! -f "package.json" ]; then
    error "Execute este script no diretório raiz do projeto."
    exit 1
fi

# Instalar dependências do root (para packages compartilhados)
log "Instalando dependências do root..."
npm ci

# Build da patient-web
log "Building patient-web..."
cd apps/patient-web
npm ci
npm run build

if [ $? -ne 0 ]; then
    error "Falha no build da patient-web"
    exit 1
fi

# # Build da admin-web (temporariamente desabilitado)
# log "Building admin-web..."
# cd ../admin-web
# npm ci
# npm run build

# if [ $? -ne 0 ]; then
#     error "Falha no build da admin-web"
#     exit 1
# fi

# Voltar para o root
cd ../..

log "✅ Build concluído com sucesso!"
log "📁 Patient Web build: apps/patient-web/.next"
# log "📁 Admin Web build: apps/admin-web/.next (desabilitado)"
