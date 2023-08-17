import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Home from "./Home";
import ContextAPI from "./ContextAPI/ContextAPI";
import Results from "./Results";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Step1 />,
      },
      {
        path: "/2",
        element: <Step2 />,
      },
      {
        path: "/results",
        element: <Results />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextAPI>
      <RouterProvider router={router} />
    </ContextAPI>
  </React.StrictMode>
);
