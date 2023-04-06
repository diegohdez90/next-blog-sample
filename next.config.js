/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['logowik.com', 'git-scm.com']
  },
}

module.exports = nextConfig
