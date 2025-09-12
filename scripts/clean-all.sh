#!/bin/bash

# Script para limpar caches e forçar rebuild completo
echo "🧹 Limpando todos os caches..."

# Parar aplicações PM2
echo "Parando aplicações..."
pm2 stop all 2>/dev/null || true

# Limpar caches do Next.js
echo "Limpando cache do Next.js..."
rm -rf apps/patient-web/.next
rm -rf apps/admin-web/.next

# Limpar node_modules
echo "Removendo node_modules..."
rm -rf node_modules
rm -rf apps/*/node_modules
rm -rf packages/*/node_modules

# Limpar caches do npm
echo "Limpando cache do npm..."
npm cache clean --force

# Limpar arquivos de build do TypeScript
echo "Limpando arquivos de build do TypeScript..."
find . -name "*.tsbuildinfo" -delete

# Limpar arquivos temporários
echo "Limpando arquivos temporários..."
find . -name ".DS_Store" -delete
find . -name "*.log" -delete

# Reinstalar dependências
echo "Reinstalando dependências..."
npm install

echo "✅ Limpeza completa!"
echo "Agora execute: npm run build para reconstruir"
