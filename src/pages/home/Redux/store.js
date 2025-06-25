import { configureStore } from "@reduxjs/toolkit";
import formTypeReducer from './formTypeSlice';
import profileReducer from "./profileSlice";
import loginReducer from './loginSlice';
import scrollReducer from '../../component/Redux/scrollSlice'; // Add this line
import extrachargesReducer from '../Redux/extrachargesSlice';
import summaryReducer from './summarySlice';


const store = configureStore({
  reducer: {
    formType: formTypeReducer,
    profile: profileReducer,
    login: loginReducer,
    scroll: scrollReducer,
    extraCharges: extrachargesReducer,
    summary: summaryReducer,

    // Add this here too
  },
});

export default store;

