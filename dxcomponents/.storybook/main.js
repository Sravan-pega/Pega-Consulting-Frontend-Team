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
  // GitHub Pages configuration
  managerHead: (head) => `
    ${head}
    <base href="${process.env.NODE_ENV === 'production' ? '/dxcomponents/' : '/'}">
  `
};
export default config;
