import { configureStore } from "@reduxjs/toolkit";
import formTypeReducer from './formTypeSlice';
import profileReducer from "./profileSlice";
import loginReducer from './loginSlice';

const store = configureStore({
  reducer: {
    formType: formTypeReducer,
    profile: profileReducer,
    login: loginReducer,

  },
});

export default store;
