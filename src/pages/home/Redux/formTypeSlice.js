import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formType: null, // Null means koi form select nahi hua abhi
};

const formTypeSlice = createSlice({
  name: "formType",
  initialState,
  reducers: {
    setBuyForm: (state) => {
      state.formType = 2; // Buy Form ke liye 2 save karna
    },
    setSellForm: (state) => {
      state.formType = 3; // Sell Form ke liye 1 save karna
    },
    
  },
});

export const { setBuyForm, setSellForm } = formTypeSlice.actions;
export default formTypeSlice.reducer;
