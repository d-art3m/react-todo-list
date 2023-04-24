import { createSlice } from '@reduxjs/toolkit';

export const ALL = 'all';
export const ACTIVE = 'active';
export const COMPLETED = 'completed';

const filterSlice = createSlice({
  name: 'filter',
  initialState: ALL,
  reducers: {
    setFilter: (_, action) => {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice;
