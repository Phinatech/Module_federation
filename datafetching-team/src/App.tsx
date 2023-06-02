// import React from 'react'
import Files from "./pages/Files";
import { RouterProvider } from "react-router-dom";
import { element } from "./routes/mainRouter";

const App = () => {
  return (
    <div>
      <RouterProvider router={element} />
    </div>
  );
};

export default App;
