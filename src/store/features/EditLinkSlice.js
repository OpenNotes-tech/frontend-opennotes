import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  job_initials: [],
};

export const editLinkSlice = createSlice({
  name: "Link",
  initialState,
  reducers: {
    editInitialLink: (state, action) => {
      state.job_initials = action.payload;
    },
    addLink: (state, action) => {
      state.job_initials.push(action.payload);
    },
    deleteLink: (state, action) => {
      state.job_initials = state.job_initials.filter((exp) => {
        return exp.job_initials._id !== action.payload._id;
      });
    },
    editLink: (state, action) => {
      state.job_initials = state.job_initials.filter((exp) => {
        return exp.job_initials._id !== action.payload._id;
      });
      state.job_initials.push(action.payload);
    },
    editApplicant: (state, action) => {
      state.job_initials = state.job_initials.filter((exp) => {
        return exp.job_initials._id === action.payload[1];
      });
      state.job_initials.applicants.push(action.payload[0]);
    },
  },
});

export default editLinkSlice.reducer;
export const { editLink, editApplicant, editInitialLink, deleteLink, addLink } =
  editLinkSlice.actions;
