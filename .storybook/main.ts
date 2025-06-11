import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../lib/**/*.mdx",
    "../docs/*.mdx",
    "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../docs/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-themes"
  ],
  "core": {
    "disableTelemetry": true,
  },
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  }
};
export default config;
