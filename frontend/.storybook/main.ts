import type { StorybookConfig, } from '@storybook/react-vite';

const config : StorybookConfig = {
    framework : '@storybook/react-vite',
    core      : {
        builder : '@storybook/builder-vite',
    },
    addons    : [
        '@storybook/addon-actions',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-react-i18next',
    ],
    stories   : [
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
};

export default config;
