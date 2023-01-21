const config = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../components/templates/base/**/*.stories.mdx',
    '../components/templates/base/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      /**
       * NOTE: fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  core: {
    builder: '@storybook/builder-webpack5'
  },
  refs: {
    'design-system': {
      title: 'Storybook Design System',
      url: 'https://5ccbc373887ca40020446347-yldsqjoxzb.chromatic.com'
    }
  },
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  },
  features: {
    babelModeV7: true
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: false,
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  }
}
export default config
