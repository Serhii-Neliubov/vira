import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Fragment } from "react";
import { Toaster } from "react-hot-toast";

// Pages
import Dashboard from "@pages/Dashboard.tsx";
import Home from "@pages/Home.tsx";
import Login from "@pages/Login.tsx";
import Registration from "@pages/Registration.tsx";
import ProtectedRoute from "@components/ProtectedRoute.tsx";
import ChangePassword from "@pages/ChangePassword.tsx";
import AccountRecovery from "@pages/AccountRecovery.tsx";

const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <ProtectedRoute element={<Dashboard />} />,
    },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Registration />,
    },
    {
        path: "/change-password",
        element: <ChangePassword />,
    },
    {
        path: "/account-recovery",
        element: <AccountRecovery />,
    },
]);

export const API_URL = 'http://localhost:3000';

export default function App() {
    return (
        <Fragment>
            <RouterProvider router={router} />
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </Fragment>
    );
}