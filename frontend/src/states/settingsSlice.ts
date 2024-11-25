import { createSlice, PayloadAction, } from '@reduxjs/toolkit';

type SettingsState = {
    locale : string,
};

const initialState : SettingsState = {
    locale : 'en',
};

const settingsSlice = createSlice({
    initialState,
    name     : 'settings',
    reducers : {
        setLocale : (state, action: PayloadAction<string>) => ({
            ...state,
            locale : action.payload,
        }),
    },
});

export const { setLocale, } = settingsSlice.actions;

export const settingsReducer = settingsSlice.reducer;
