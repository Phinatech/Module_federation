// import React from "react";

import { RouterProvider } from "react-router-dom";
import { element } from "./routes/MainRoutes";

const App = () => {
  return (
    <div>
      <RouterProvider router={element} />
    </div>
  );
};

export default App;
