import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SingUp/SignUp";
import Register from "./components/Register/Register";
import AuthProvider from "./Provider/AuthProvider";
import Orders from "./components/Orders";
import PrivetRoutes from "./components/Routes/PrivetRoutes";
import Profile from "./components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:'/orders',
        element:<PrivetRoutes><Orders></Orders></PrivetRoutes>
      },
      {
        path:'/profile',
        element:<PrivetRoutes><Profile></Profile></PrivetRoutes>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
