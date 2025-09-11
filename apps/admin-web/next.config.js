/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@acessapsi/shared-types', '@acessapsi/ui-components'],
  images: {
    domains: ['localhost'],
  },
  // Otimizações de performance
  compress: true,
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['lucide-react', 'recharts']
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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