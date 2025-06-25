/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@psiclin/shared-types', '@psiclin/ui-components', '@psiclin/utils'],
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  reactStrictMode: true
}

module.exports = nextConfig 