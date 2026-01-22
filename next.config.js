/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/MonsterRemodelingFWWeb' : '',
  assetPrefix: isProd ? '/MonsterRemodelingFWWeb/' : '',
  trailingSlash: true,
}

module.exports = nextConfig
