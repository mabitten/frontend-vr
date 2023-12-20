import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./privateRouter";
import { LoginScreen } from "@/screens/AuthStack";
import { HomeScreen } from "@/screens/HomeStack";
import { NotFound } from "@/screens/ConfigStack";

export const Routers = createBrowserRouter([
    {
        path: "/",
        element: <LoginScreen />,
    },
    {
        path: "/home",
        element: <PrivateRoute />,
        children: [
            {
                path: "/home",
                element: <HomeScreen />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
