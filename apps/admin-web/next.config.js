/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@acessapsi/shared-types', '@acessapsi/ui-components'],
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig 