import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";
import {Toaster} from "react-hot-toast";

const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
    </React.StrictMode>,
)
