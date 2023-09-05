import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Quiz } from "./pages/Quiz.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { Admin } from "./pages/Admin.jsx";
import React from "react";
import { Dashboard } from "./pages/Dashboard";
import { Questions } from "./pages/Questions.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
    errorElement: <ErrorPage />,
  },
  { path: "*", element: <ErrorPage /> },
  {
    path: "/questions",
    element: <Questions />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/login",
    element: <Admin />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
