/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  basePath: '',
  images: {
    formats: ['image/avif', 'image/webp'],
    disableStaticImages: true
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
