import {AccountRecovery, ChangePassword, Home, Login, Project, Projects, Registration} from "@pages/index.ts";

export const routes = [
    {
        path: "/",
        element: Home,
        isAuthRequired: true,

    },

    // Auth
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
    },

    // Projects
    {
        path: "/projects",
        isAuthRequired: false,
        element: Projects,
    },
    {
        path: "/projects/:projectId",
        element: Project,
        isAuthRequired: true,
    },

]