import {
  createBrowserRouter,
} from "react-router-dom";

import { Dashboard } from './App.tsx'

export default createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/aaa",
    element: <Dashboard />,
  },
]);