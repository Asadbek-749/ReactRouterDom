import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MinLayout from "./pages/MinLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Prodacts from "./pages/Prodacts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MinLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "prodacts/:id", Component: Prodacts },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
