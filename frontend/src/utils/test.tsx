import { configureStore, type Store, } from '@reduxjs/toolkit';
import { render, } from '@testing-library/react';
import type { ReactNode, } from 'react';
import { Provider, } from 'react-redux';
import { MemoryRouter, } from 'react-router';

import { settingsReducer, } from '../states';

export const createStore = (preloadedState? : unknown) => configureStore({
    preloadedState,
    reducer    : {
        settings : settingsReducer,
    },
    middleware : getDefaultMiddleware => getDefaultMiddleware(),
});

export const defaultStore = createStore();

export type RootState = ReturnType<typeof defaultStore.getState>;

const customRender = (ui : any, {
    preloadedState,
    store = createStore(preloadedState),
    ...rest
} : {
    preloadedState? : Record<string, any>,
    store?          : Store<RootState>,
    [ key : string] : any,
} = {}) => render(ui, {
    wrapper : ({
        children,
    } : {
        children : ReactNode,
    }) => (
        <Provider store={store}>
            <MemoryRouter>
                {children}
            </MemoryRouter>
        </Provider>
    ),
    ...rest,
});

export * from '@testing-library/react';

export { customRender as render, };
