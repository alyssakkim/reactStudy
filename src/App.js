import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const App = createBrowserRouter([
    {
      path: "/reactStudy",
      element: <Home />,
    },
    {
      path: "/movie/:movieId",
      element: <Detail />,
    },
]);

// App.js는 router를 render 함
export default App;