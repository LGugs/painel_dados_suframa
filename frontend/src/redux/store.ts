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

// para garantir o tipo do state quando formos consumir
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
