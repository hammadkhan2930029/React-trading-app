import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formType: null,
};

const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    setMarketSummaryDetails: (state) => {
      state.formType = 14;
    },
    resetSummary: (state) => {
      state.formType = null;
    },
   
   
  },
});

export const { setMarketSummaryDetails,resetSummary } = summarySlice.actions;
export default summarySlice.reducer;
