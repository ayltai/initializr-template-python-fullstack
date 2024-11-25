import type { Meta, StoryObj, } from '@storybook/react';
import { createMemoryRouter, RouterProvider, } from 'react-router';

import { Header, } from './Header';

const meta : Meta<typeof Header> = {
    component  : Header,
    title      : 'Layouts/Header',
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default : Story = {
    decorators : [
        Component => <RouterProvider router={createMemoryRouter([
            {
                path : '/',
                Component,
            },
        ])} />,
    ],
};
