import type { Preview, } from '@storybook/react';
import { App, ConfigProvider, } from 'antd';
import { createElement, } from 'react';
import { Provider, } from 'react-redux';

import { THEME, } from '../src/constants';
import { store, } from '../src/states';
import i18n from './i18next';
import { theme, } from './theme';

const preview : Preview = {
    initialGlobals : {
        locale  : 'en',
        locales : {
            en : 'English',
        },
    },
    decorators     : [
        Story => createElement(ConfigProvider, {
            theme : THEME,
        }, createElement(App, undefined, createElement(Story))),
        // eslint-disable-next-line react/no-children-prop
        Story => createElement(Provider, {
            store,
            children : createElement(Story),
        }),
    ],
    parameters     : {
        i18n,
        actions            : {
            argTypesRegex : '^on[A-Z].*',
        },
        backgrounds        : {
            default : 'Dark',
            values  : [
                {
                    name  : 'Dark',
                    value : THEME.token.colorBgLayout,
                },
            ],
        },
        controls           : {
            expanded : true,
            matchers : {
                color : /(background|color)$/i,
                date  : /Date$/,
            },
        },
        docs               : {
            theme,
        },
        layout             : 'centered',
    },
    tags           : [
        'autodocs',
    ],
};

export default preview;
