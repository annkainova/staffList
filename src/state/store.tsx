import { configureStore } from '@reduxjs/toolkit';
import EmployeesListReducer from './Slice/EmployeesListSlice';
import selectedEmployeeReducer from './Slice/SelectedEmployeeSlice';
import SortFilterReducer from './Slice/SortFilterSlice';

export const store = configureStore({
  reducer: {
    employees: EmployeesListReducer,
    selectedEmployee: selectedEmployeeReducer,
    filters: SortFilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
