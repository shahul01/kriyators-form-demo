import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/';
import { accDetailsApi } from '../features/services/accDetails';

export const store = configureStore({
  reducer: {
    [accDetailsApi.reducerPath]: accDetailsApi.reducer
  },
  middleware: getDefaultMiddleware => (
    getDefaultMiddleware().concat(accDetailsApi.middleware)
  )
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
