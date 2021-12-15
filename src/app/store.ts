import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import calculatorReducer from '../features/Calculator/CalculatorSlice';

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
