import React from "react";
import {useNavigate} from "react-router-dom";

export default function ProtectedRoute({ element }: { element: React.ReactNode }) {
    // Replace the following line with your authentication logic
    const navigate = useNavigate();
    const isAuthenticated = true;

    if(!isAuthenticated) {
        navigate('/login');
    }

    return element;
}