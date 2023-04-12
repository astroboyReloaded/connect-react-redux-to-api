import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from '@reduxjs/toolkit';

const USERS_URL = 'https://randomuser.me/api/?results=5';

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(USERS_URL);
      const fetchedData = await response.json();
      return fetchedData.response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    users: (state) => {
      console.log(state.users);
    },
  },
  extraReducers: {},
});

export const { users } = usersSlice.actions;

export default usersSlice.reducer;
