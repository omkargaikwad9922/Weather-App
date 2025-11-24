import React from "react";
import Weather from "./Components/Weather";
import WeatherEnter from "./Components/WeatherEnter";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WeatherEnter />,
    },
    {
      path: "/main",
      element: <Weather />,
    },
  ]);
  return (
    <>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
