import { App, ConfigProvider, Layout, } from 'antd';
import { StrictMode, Suspense, } from 'react';
import { createRoot, } from 'react-dom/client';
import { Provider, } from 'react-redux';
import { createHashRouter, Navigate, Outlet, } from 'react-router';
import { RouterProvider, } from 'react-router/dom';
import { PersistGate, } from 'redux-persist/integration/react';

import { Footer, Header, } from './components';
import { THEME, } from './constants';
import { apply, } from './i18n';
import en from './i18n/en.json';
import { Agreement, Home, } from './pages';
import { persistor, store, } from './states';
import { handleError, } from './utils';

const MainLayout = () => (
    <Layout style={{
        minHeight : '100vh',
        display   : 'flex',
    }}>
        <Layout.Header style={{
            width           : '100%',
            paddingLeft     : 16,
            paddingRight    : 16,
            position        : 'fixed',
            display         : 'flex',
            alignItems      : 'center',
            backgroundColor : '#282828',
            zIndex          : 1,
        }}>
            <Header />
        </Layout.Header>
        <Layout.Content style={{
            marginTop : 64,
            display   : 'flex',
            flex      : 1,
        }}>
            <Outlet />
        </Layout.Content>
        <Layout.Footer style={{
            padding : 0,
        }}>
            <Footer />
        </Layout.Footer>
    </Layout>
);

apply({
    language           : navigator.language.substring(0, 2),
    supportedLanguages : [
        'en',
    ],
    fallbackLanguage   : 'en',
    resources          : {
        en : {
            translation : en,
        },
    },
}).then(() => createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Suspense fallback='Loading'>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <ConfigProvider theme={THEME}>
                        <App>
                            <RouterProvider router={createHashRouter([
                                {
                                    Component : MainLayout,
                                    children  : [
                                        {
                                            path      : '/',
                                            index     : true,
                                            Component : Home,
                                        },
                                        {
                                            path     : '/agreements',
                                            children : [
                                                {
                                                    path      : '/agreements/:page',
                                                    Component : Agreement,
                                                },
                                            ],
                                        },
                                        {
                                            path    : '*',
                                            element : <Navigate to='/' />,
                                        },
                                    ],
                                },
                            ])} />
                        </App>
                    </ConfigProvider>
                </PersistGate>
            </Provider>
        </Suspense>
    </StrictMode>
)).catch(handleError);
