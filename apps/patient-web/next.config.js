/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@acessapsi/shared-types', '@acessapsi/ui-components', '@acessapsi/utils'],
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  reactStrictMode: true,
  output: 'standalone'
}

module.exports = nextConfig 