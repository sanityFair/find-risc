import { configureStore } from '@reduxjs/toolkit';
import { surveyReducer } from 'shared';

export const store = configureStore({
    reducer: { surveyReducer },
});
