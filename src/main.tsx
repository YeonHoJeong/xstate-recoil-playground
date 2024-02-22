import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes";
import "./index.css";
import { Container } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </StyledEngineProvider>
  </React.StrictMode>
);
