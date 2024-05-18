import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./nav.data.ts";
import ProtectedRoute from "@components/ProtectedRoute.tsx";

export default function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map(route => (
                    route.isAuthRequired ?
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<ProtectedRoute element={<route.element/>}/>}
                        /> :
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.element/>}
                        />
                ))}
            </Routes>
        </BrowserRouter>
    )
}