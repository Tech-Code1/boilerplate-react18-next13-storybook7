const path = require('node:path')
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
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      issuer: /\.tsx$/
    })

    return config
  }
}

module.exports = nextConfig
