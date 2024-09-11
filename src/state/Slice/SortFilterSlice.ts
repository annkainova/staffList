import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SortFilterSliceInterface {
  sortBy: string;
  role: string;
  isArchive: boolean;
}

const initialState: SortFilterSliceInterface = {
  sortBy: '',
  role: '',
  isArchive: false,
};

const SortFilterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    setRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
    setIsArchive: (state, action: PayloadAction<boolean>) => {
      state.isArchive = action.payload;
    },
  },
});

export const { setSortBy, setRole, setIsArchive } = SortFilterSlice.actions;
export default SortFilterSlice.reducer;
