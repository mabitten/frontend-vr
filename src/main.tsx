import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LoginScreen } from "@/screens/AuthStack/Login.screen";
import { HomeScreen } from "@/screens/HomeStack/Home.screen";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginScreen />,
    },
    {
        path: "home",
        element: <HomeScreen />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
