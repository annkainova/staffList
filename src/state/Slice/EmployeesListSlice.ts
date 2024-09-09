import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmployeeInterface } from '../../types/Employee';

interface EmployeesListSliceInterface {
  employeesList: EmployeeInterface[];
}

const initialState: EmployeesListSliceInterface = {
  employeesList: [],
};

const EmployeesListSlice = createSlice({
  name: 'emplyees',
  initialState,
  reducers: {
    setEmployeesList(state, action: PayloadAction<EmployeeInterface[]>) {
      state.employeesList = action.payload;
    },
  },
});

export const { setEmployeesList } = EmployeesListSlice.actions;
export default EmployeesListSlice.reducer;
