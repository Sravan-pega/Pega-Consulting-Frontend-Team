/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-webpack5'
  },
  docs: {
    autodocs: 'tag'
  },
  // Configure base path for GitHub Pages deployment
  webpackFinal: async (config) => {
    const baseUrl = process.env.STORYBOOK_BASE_URL;
    if (baseUrl && process.env.NODE_ENV === 'production') {
      // Remove leading slash since Storybook adds './' prefix
      config.output.publicPath = baseUrl.replace(/^\//, '');
    }
    return config;
  }
};
export default config;
