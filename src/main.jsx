import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Settings from "./pages/Settings.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/settings", element: <Settings /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
