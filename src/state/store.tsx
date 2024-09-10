import { configureStore } from '@reduxjs/toolkit';
import EmployeesListReducer from './Slice/EmployeesListSlice';
import selectedEmployeeReducer from './Slice/SelectedEmployee';

export const store = configureStore({
  reducer: {
    employees: EmployeesListReducer,
    selectedEmployee: selectedEmployeeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
