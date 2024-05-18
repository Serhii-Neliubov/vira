import React from "react";
import {Navigate} from "react-router-dom";

type ProtectedRouteProps = {
    element: React.ReactNode;
};

export default function ProtectedRoute({element}: ProtectedRouteProps): React.ReactNode {
    // Replace the following line with your authentication logic
    const isAuthenticated = true;

    if (!isAuthenticated) {
        return <Navigate to="/login" replace/>;
    }

    return element;
}
