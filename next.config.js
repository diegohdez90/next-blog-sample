const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
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
        'DB_NAME': 'blog',
        'REST_API_DOMAIN': 'http://localhost:3000'
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
      'DB_NAME': 'dh-blog',
      'REST_API_DOMAIN':'https://next-blog-sample-lime.vercel.app'
    }
  }
}
