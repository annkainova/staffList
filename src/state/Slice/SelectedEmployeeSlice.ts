import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmployeeInterface } from '../../types/Employee';

interface SelectedEmployeeSliceInterface {
  selectedEmployee: EmployeeInterface | null;
}

const initialState: SelectedEmployeeSliceInterface = {
  selectedEmployee: null,
};

const selectedEmployeeSlice = createSlice({
  name: 'selectedEmployee',
  initialState,
  reducers: {
    setSelectedEmployee(state, action: PayloadAction<EmployeeInterface>) {
      state.selectedEmployee = action.payload;
    },
    deleteSelectedEmployee(state) {
      state.selectedEmployee = null;
    },
  },
});

export const { setSelectedEmployee, deleteSelectedEmployee } =
  selectedEmployeeSlice.actions;
export default selectedEmployeeSlice.reducer;
