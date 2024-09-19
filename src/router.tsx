import {
  createBrowserRouter,
} from "react-router-dom";

import { Dashboard } from './Dashboard'
import { NotFound } from "./NotFound";

export default createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/aaa",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);