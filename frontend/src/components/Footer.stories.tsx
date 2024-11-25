import type { Meta, StoryObj, } from '@storybook/react';
import { createMemoryRouter, RouterProvider, } from 'react-router';

import { Footer, } from './Footer';

const meta : Meta<typeof Footer> = {
    component  : Footer,
    title      : 'Layouts/Footer',
};

export default meta;

type Story = StoryObj<typeof Footer>;

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
