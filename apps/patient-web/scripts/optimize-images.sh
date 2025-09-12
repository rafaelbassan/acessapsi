#!/bin/bash

# Script para otimizar imagens e melhorar performance
echo "🖼️ Otimizando imagens..."

IMAGES_DIR="public/images"
OPTIMIZED_DIR="public/images/optimized"

# Criar diretório para imagens otimizadas se não existir
mkdir -p "$OPTIMIZED_DIR"

# Verificar se imagemagick está instalado
if ! command -v convert &> /dev/null; then
    echo "⚠️ ImageMagick não está instalado. Instalando..."
    # Para Ubuntu/Debian:
    # sudo apt-get install imagemagick
    # Para macOS:
    # brew install imagemagick
    # Para Windows: baixe de https://imagemagick.org/script/download.php
fi

echo "🔧 Otimizando imagens existentes..."

# Otimizar PNGs
for file in "$IMAGES_DIR"/*.png; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        echo "Otimizando $filename..."
        
        # Converter para WebP com qualidade 85
        convert "$file" -quality 85 "$OPTIMIZED_DIR/${filename%.*}.webp"
        
        # Otimizar PNG original
        convert "$file" -strip -interlace Plane -gaussian-blur 0.05 -quality 85 "$OPTIMIZED_DIR/$filename"
        
        echo "✅ $filename otimizado"
    fi
done

# Otimizar JPEGs
for file in "$IMAGES_DIR"/*.{jpg,jpeg,JPG,JPEG}; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        echo "Otimizando $filename..."
        
        # Converter para WebP com qualidade 80
        convert "$file" -quality 80 "$OPTIMIZED_DIR/${filename%.*}.webp"
        
        # Otimizar JPEG original
        convert "$file" -strip -interlace Plane -sampling-factor 4:2:0 -quality 80 "$OPTIMIZED_DIR/$filename"
        
        echo "✅ $filename otimizado"
    fi
done

echo "🎉 Otimização de imagens concluída!"
echo "📁 Imagens otimizadas salvas em: $OPTIMIZED_DIR"
echo ""
echo "💡 Dicas:"
echo "- Use as imagens .webp quando possível (menor tamanho)"
echo "- Substitua as imagens originais pelas otimizadas se satisfeito"
echo "- Configure seu servidor para servir WebP automaticamente"
