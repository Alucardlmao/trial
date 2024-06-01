import { configureStore } from '@reduxjs/toolkit';
import loginToggleSlice from '../slices/loginToggleSlice';

export const store = configureStore({
    reducer: {
        loginToggle: loginToggleSlice,
    },
});
