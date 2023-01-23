/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  basePath: '',
  experimental: {
    appDir: true
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.(svg, jsx, tsx)$/,
      use: ['@svgr/webpack']
    })

    return config
  }
}

module.exports = nextConfig
