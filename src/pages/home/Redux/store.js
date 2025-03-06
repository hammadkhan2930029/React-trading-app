import { configureStore } from "@reduxjs/toolkit";
import formTypeReducer from './formTypeSlice';
import profileReducer from "./profileSlice";

const store = configureStore({
  reducer: {
    formType: formTypeReducer,
    profile: profileReducer,
  },
});

export default store;
