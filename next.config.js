const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        'DB_USERNAME': 'taintery',
        'DB_PASSWORD': 'radP8vnJnWfGrSS7',
        'MONGODB_CLUSTER': 'blogcluster.ywribm7.mongodb.net',
        'DB_NAME': 'blog'
      }
    }
  }
  return {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['logowik.com', 'git-scm.com']
    },
    env: {
      'DB_USERNAME': 'taintery',
      'DB_PASSWORD': 'radP8vnJnWfGrSS7',
      'MONGODB_CLUSTER': 'blogcluster.ywribm7.mongodb.net',
      'DB_NAME': 'dh-blog'
    }
  }
}

module.exports = nextConfig();
