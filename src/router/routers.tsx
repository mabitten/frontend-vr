import { LoginScreen } from "@/screens/AuthStack";
import { HomeScreen } from "@/screens/HomeStack";
import { createBrowserRouter } from "react-router-dom";

export const Routers = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen />,
    },
    {
        path: "/login",
        element: <LoginScreen />,
    },
]);
