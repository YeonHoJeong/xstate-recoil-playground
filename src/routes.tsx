import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import StartXState from "./playground/ex-01-start-xstate";
import WhatIsActor from "./playground/ex-02-what-is-actor";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/playground/ex-01-start-xstate",
    element: <StartXState />,
  },
  {
    path: "/playground/ex-02-what-is-actor",
    element: <WhatIsActor />,
  },
]);

export default routes;
