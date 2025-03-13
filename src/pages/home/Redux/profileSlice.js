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
    setDividen: (state) => {
      state.formType = 17;
    },
    setDividen_list: (state) => {
      state.formType = 18;
    },
  },
});

export const { setProfile, setEditeProfile,setDividen,setDividen_list } = profileSlice.actions;
export default profileSlice.reducer;
