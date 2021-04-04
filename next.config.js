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
  ...cssOptions,
  env: {
    api: 'http://45.119.213.86:3337/',
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      include: path.join(process.cwd(), 'src', 'components', 'icon', 'icons'),
      use: [
        'svg-sprite-loader',
        {
          loader: 'svgo-loader',
        },
      ],
    })
    return config
  },
}
const plugins = [withImages]
module.exports = withPugins(plugins, nextConfig)
module.exports = {
  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
    }
    return paths
  },
}
