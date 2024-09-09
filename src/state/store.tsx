import { configureStore } from '@reduxjs/toolkit';
import EmployeesListReducer from './Slice/EmployeesListSlice';

export const store = configureStore({
  reducer: {
    employees: EmployeesListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
