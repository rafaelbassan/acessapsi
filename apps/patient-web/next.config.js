/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@acessapsi/shared-types', '@acessapsi/ui-components', '@acessapsi/utils'],
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  reactStrictMode: true,
  output: 'standalone',
  // Otimizações de performance
  compress: true,
  images: {
    // Desabilitar otimização de imagens completamente para resolver problemas
    unoptimized: true,
    // Permitir imagens locais e de qualquer domínio
    domains: ['localhost', '0.0.0.0'],
    // Configuração adicional para produção
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // Otimizar bundle
  webpack: (config, { dev, isServer }) => {
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