import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Pages/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
