import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Auth } from "./pages/Auth/Auth.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
    ],
  },
  {path: "auth", Component: Auth}
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
