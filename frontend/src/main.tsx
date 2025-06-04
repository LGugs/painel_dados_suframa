import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StyledEngineProvider } from "@mui/material";
import router from "./routers/";
import "./index.css";
//import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router}></RouterProvider>
    </StyledEngineProvider>
  </StrictMode>
);
