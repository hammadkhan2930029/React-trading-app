import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formType: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state) => {
      state.formType = 8;
    },
    setEditeProfile: (state) => {
      state.formType = 9;
    },
  },
});

export const { setProfile, setEditeProfile } = profileSlice.actions;
export default profileSlice.reducer;
