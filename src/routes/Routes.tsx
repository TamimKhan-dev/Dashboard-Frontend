import { createBrowserRouter } from "react-router";
import Dashboard from "../layouts/Dashboard";
import Home from "../pages/Home";

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
    }
]);