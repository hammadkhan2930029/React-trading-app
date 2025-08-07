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
    holdings_details: (state) => {
      state.formType = 99; // Sell Form ke liye 1 save karna
    },
     close_Trades: (state) => {
      state.formType = 111; // Sell Form ke liye 1 save karna
    },
    reset: (state) => {
      state.formType = null;
    },

  },
});

export const { setBuyForm, setSellForm, setBuy_sell_list, holdings_details,reset,close_Trades } = formTypeSlice.actions;
export default formTypeSlice.reducer;
