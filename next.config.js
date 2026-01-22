/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/MonsterRemodelingFWWeb' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/MonsterRemodelingFWWeb/' : '',
}

module.exports = nextConfig
