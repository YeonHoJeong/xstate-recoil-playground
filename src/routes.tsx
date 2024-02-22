import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import StartXState from "./playground/start-xstate";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/playground/start-xstate",
    element: <StartXState />,
  },
]);

export default routes;
