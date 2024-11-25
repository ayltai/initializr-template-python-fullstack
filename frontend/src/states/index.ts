import { combineReducers, configureStore, } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE, } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

import { settingsReducer,  } from './settingsSlice';

const createNoopStorage = () => ({
    getItem    : () => Promise.resolve(null),
    setItem    : (_ : string, value : any) => Promise.resolve(value),
    removeItem : () => Promise.resolve(),
});

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const makeStore = () => configureStore({
    reducer    : persistReducer({
        storage,
        key       : 'root',
        blacklist : [],
    }, combineReducers({
        settings : settingsReducer,
    })),
    middleware : getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck : {
            ignoredActions : [
                FLUSH,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER,
                REHYDRATE,
            ],
        },
    }),
    devTools   : import.meta.env.DEV,
});

export const store     = makeStore();
export const persistor = persistStore(store);

export type AppState    = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { settingsReducer, };

export { setLocale, } from './settingsSlice';
