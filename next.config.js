const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  images: {
    domains: ['mdbootstrap.com', 'mdbcdn.b-cdn.net'],
  },
}

module.exports = withPlugins([[withImages]], nextConfig)
