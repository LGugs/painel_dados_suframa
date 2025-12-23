//import userReducer from "./slices/user.slice";
//import storageSession from "redux-persist/lib/storage/session";
//import { persistReducer, persistStore } from "redux-persist";

import { configureStore } from "@reduxjs/toolkit";
import PoloReducer from "./slices/polo.slice";
import DadosReducer from "./slices/dados.slice";


export const store = configureStore({
  reducer: {
    PoloReducer,
    DadosReducer
  },
});

// para garantir o tipo do state quando formos consumir
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
