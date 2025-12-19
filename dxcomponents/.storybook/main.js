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
  managerHead: (head) => {
    if (process.env.NODE_ENV === 'production') {
      return `${head}<base href="/Pega-Consulting-Frontend-Team/">`;
    }
    return head;
  },
  webpackFinal: async (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.output.publicPath = '/Pega-Consulting-Frontend-Team/';
    }
    return config;
  },
  viteFinal: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.base = '/Pega-Consulting-Frontend-Team/';
    }
    return config;
  }
};
export default config;
