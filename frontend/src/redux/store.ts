//import userReducer from "./slices/user.slice";
//import storageSession from "redux-persist/lib/storage/session";
//import { persistReducer, persistStore } from "redux-persist";

import { configureStore } from "@reduxjs/toolkit";
import DashboardReducer from "./slices/dashboard.slice";

export const store = configureStore({
  reducer: {
    DashboardReducer,
  },
});

export default store;
