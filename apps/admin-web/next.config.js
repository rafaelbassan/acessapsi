/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@psiclin/shared-types', '@psiclin/ui-components'],
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig 