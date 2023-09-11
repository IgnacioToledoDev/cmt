import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Quiz } from "./pages/Quiz.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
