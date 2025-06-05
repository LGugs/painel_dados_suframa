import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StyledEngineProvider } from "@mui/material";
import { Provider } from "react-redux";
import router from "./routers/";
import "./index.css";
import store from "./redux/store";
//import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <RouterProvider router={router}></RouterProvider>
      </StyledEngineProvider>
    </Provider>
  </StrictMode>
);
