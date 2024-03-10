import { React } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Favourites from "../pages/favourites";
import Detail from "../pages/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/favourites",
    element: <Favourites />,
  },
  {
    path: "/food-details/:id",
    element: <Detail />,
  },
]);

export default router;
