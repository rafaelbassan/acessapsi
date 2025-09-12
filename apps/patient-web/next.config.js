/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@acessapsi/shared-types', '@acessapsi/ui-components', '@acessapsi/utils'],
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  reactStrictMode: true,
  output: 'standalone',
  // Configurações importantes para evitar problemas de chunk loading
  generateEtags: false,
  poweredByHeader: false,
  // Otimizações de performance
  compress: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Configurações de assets estáticos
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  trailingSlash: false,
  // Otimizar bundle
  webpack: (config, { dev, isServer }) => {
    // Configurar chunk splitting de forma mais estável
    if (!isServer) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          default: false,
          vendors: false,
          // Chunk principal do framework
          framework: {
            name: 'framework',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          // Chunk das bibliotecas externas
          lib: {
            test(module) {
              return (
                module.size() > 160000 &&
                /node_modules[/\\]/.test(module.nameForCondition())
              )
            },
            name(module) {
              const hash = require('crypto').createHash('sha1')
              hash.update(module.nameForCondition() || '')
              return 'lib-' + hash.digest('hex').substring(0, 8)
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
            chunks: 'all',
          },
          // Chunk comum
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20,
            chunks: 'all',
            reuseExistingChunk: true,
          },
        },
      }
    }

    // Remover console.logs em produção
    if (!dev && !isServer) {
      config.optimization.minimizer.push(
        new (require('terser-webpack-plugin'))({
          terserOptions: {
            compress: {
              drop_console: true,
              drop_debugger: true,
            },
          },
        })
      );
    }

    return config;
  },
}

module.exports = nextConfig 