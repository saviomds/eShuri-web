import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  name: string;
  email: string;
  password: string;
  image?: string | null;
  role?: string | null;
}
interface AuthState {
  loading: boolean;
  token?: string;
  isAuth: boolean;
  user?: User;
  error?: any;
}

const initialState: AuthState = {
  loading: false,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const register = createAsyncThunk(
  'auth/register',
  async (payload: User) => {
    try {
      const response = await axios.post('/api/auth/register', payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export default authSlice.reducer;
