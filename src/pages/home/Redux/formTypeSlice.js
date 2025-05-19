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
      setBuy_sell_list: (state) => {
      state.formType = 4; // Sell Form ke liye 1 save karna
    },
    
  },
});

export const { setBuyForm, setSellForm ,setBuy_sell_list} = formTypeSlice.actions;
export default formTypeSlice.reducer;
