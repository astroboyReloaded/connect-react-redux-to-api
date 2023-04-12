import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    users: (state) => {
      state.users;
    },
  },
  extraReducers: {},
});

export const { users } = usersSlice.actions;

export default usersSlice.reducer;
