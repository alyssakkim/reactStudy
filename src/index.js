import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App";

// react 어플리케이션 렌더링

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={App} />
);