import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errors: [],
  loading: false,
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    addError: (state, action) => {
      state.errors.push(action.payload);
    },
    clearError: (state, action) => {
      state.errors = state.errors.filter(
        (error) => error.id !== action.payload,
      );
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { clearError, setLoading, addError } = errorSlice.actions;
export default errorSlice.reducer;
