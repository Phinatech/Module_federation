import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layout/homelayout/HomeLayout";

import Datafectching from "../pages/auth/Datafectching";
import Statemangement from "../pages/auth/Statemangement";
import Todo from "../pages/auth/Todo";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Datafectching />,
      },
      {
        path: "state-mangement",
        element: <Statemangement />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
    ],
  },
]);
