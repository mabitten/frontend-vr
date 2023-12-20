import { Navigate, Outlet } from "react-router-dom";
import { useIsLogged } from "@/services/hooks";

/**
 * Privatiza rotas que necessitam do usuário estar logado
 */
export const PrivateRoute = () => {
    const { data: isLogged } = useIsLogged({ enabled: false });

    return isLogged ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
