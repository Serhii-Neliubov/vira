import {AccountRecovery, ChangePassword, Dashboard, Home, Login, Registration} from "@pages/index.ts";

export const routes = [
    {
        path: "/dashboard",
        element: Dashboard,
        isAuthRequired: true,
    },
    {
        path: "/",
        element: Home,
        isAuthRequired: true,

    },
    {
        path: "/login",
        element: Login,
        isAuthRequired: false,
    },
    {
        path: "/register",
        element: Registration,
        isAuthRequired: false,
    },
    {
        path: "/change-password",
        element: ChangePassword,
        isAuthRequired: false,
    },
    {
        path: "/account-recovery",
        isAuthRequired: false,
        element: AccountRecovery,
    }
]