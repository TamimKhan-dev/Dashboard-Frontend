import { createBrowserRouter } from "react-router";
import Dashboard from "../layouts/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Dashboard,
        children: [
            {
                path: '/',
                Component: Home
            }
        ]
    },
    {
        path: 'login',
        Component: Login
    }
]);