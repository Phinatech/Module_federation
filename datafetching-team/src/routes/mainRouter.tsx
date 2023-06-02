import { createBrowserRouter } from "react-router-dom";

import Files from "../pages/Files";
import Layouts from "../components/layout/Layouts";
import Useeffect from "../pages/Useeffect";
import Tanstack from "../pages/Tanstack";
import Swr from "../pages/Swr";
export const element = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: (
          <Files>
            <Useeffect />
          </Files>
        ),
      },
      {
        index: true,
        path: "tanstack",
        element: (
          <Files>
            <Tanstack />
          </Files>
        ),
      },
      {
        index: true,
        path: "usestate",
        element: (
          <Files>
            <Swr />
          </Files>
        ),
      },
    ],
  },
]);
