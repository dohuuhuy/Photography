const path = require('path')
const postcssPresetEnv = require('postcss-preset-env')
const withPugins = require('next-compose-plugins')
const withImages = require('next-images')
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
    includePaths: [path.join(process.cwd(), 'src', 'common', 'scss')],
  },
}

const nextConfig = {
  ...cssOptions,
  env: {
    api: 'https://cms.medpro.com.vn',
  },
  images: {
    loader: 'default',
    domains: ['cms.medpro.com.vn'],
  },
  exclude: path.join(process.cwd(), 'src', 'components', 'icon', 'icons'),
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
      include: path.join(process.cwd(), 'src', 'components', 'icon', 'icons'),
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
          esModule: false,
        },
      },
    })
    config.module.rules.push({
      test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/i,
      include: path.join(process.cwd(), 'src', 'components', 'icon', 'icons'),
      use: [
        {
          loader: 'file-loader',
          options: {
            esModule: false,
          },
        },
      ],
    })
    config.module.rules.push({
      test: /\.svg$/,
      include: path.join(process.cwd(), 'src', 'components', 'icon', 'icons'),
      use: [
        'svg-sprite-loader',
        {
          loader: 'svgo-loader',
          options: {
            plugins: [{ removeTitle: true }, { cleanupIDs: true }],
          },
        },
      ],
    })
    return config
  },
}

const plugins = [
  withImages,
  {
    images: {
      // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      // loader: 'default',
      domains: ['cms.medpro.com.vn'],
    },
  },
]

module.exports = withPugins(plugins, nextConfig)
