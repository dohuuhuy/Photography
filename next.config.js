const withImages = require('next-images')
const path = require('path')
const withPugins = require('next-compose-plugins')
const postcssPresetEnv = require('postcss-preset-env')
const postcssPresetEnvOptions = {
  features: {
    'custom-media-queries': true,
    'custom-selectors': true,
  },
}

const cssOptions = {
  postcssLoaderOptions: {
    plugins: [postcssPresetEnv(postcssPresetEnvOptions)],
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src', 'common', 'css')],
  },
}

const nextConfig = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  },
  images: {
    domains: ['mdbootstrap.com'],
  },
  ...cssOptions,
  env: {
    API_BE: 'http://localhost:3006',
  },

  webpack(config) {
    config.module.rules.push({})
    return config
  },
}
const plugins = [
  [
    withImages,
    {
      images: {
        domains: ['mdbootstrap.com'],
      },
    },
  ],
]
module.exports = withPugins(plugins, nextConfig)
