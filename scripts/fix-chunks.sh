#!/bin/bash

# Script de correção rápida para problemas de chunk loading
echo "🔧 Executando correção rápida para problemas de chunk loading..."

# Parar aplicação
pm2 stop patient-web 2>/dev/null || true

# Limpar apenas os caches problemáticos
rm -rf apps/patient-web/.next/static
rm -rf apps/patient-web/.next/server
rm -rf apps/patient-web/.next/cache

# Rebuild apenas os static assets
cd apps/patient-web
NODE_ENV=production npm run build

# Verificar se o build foi bem-sucedido
if [ $? -eq 0 ]; then
    echo "✅ Build concluído com sucesso"
    
    # Verificar arquivos estáticos
    if [ -d ".next/static" ]; then
        echo "✅ Arquivos estáticos criados"
        ls -la .next/static/chunks/ | head -10
    else
        echo "❌ Falha ao criar arquivos estáticos"
        exit 1
    fi
    
    cd ../..
    
    # Reiniciar aplicação
    pm2 start ecosystem.config.js
    sleep 3
    
    # Verificar saúde
    if curl -f -s http://localhost:3000/api/health >/dev/null; then
        echo "✅ Aplicação funcionando"
        pm2 logs patient-web --lines 5 --nostream
    else
        echo "⚠️ Aplicação pode estar inicializando..."
        pm2 logs patient-web --lines 10 --nostream
    fi
else
    echo "❌ Falha no build"
    exit 1
fi
