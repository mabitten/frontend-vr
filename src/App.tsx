import { RouterProvider } from "react-router-dom";
import { Routers } from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createGlobalStyle } from "styled-components";
import "@/assets/translations/translation";
import { useEffect } from "react";
import { getAuthStore } from "@/utils";

const queryClient = new QueryClient();

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: "Montserrat";
    }

    input {
        margin: 0;
        padding: 0;
        border: none;
        font: inherit;
        color: inherit;
        background-color: transparent;
        box-sizing: border-box;
        outline: none;
    }
`;

/**
 * Componente principal da aplicação.
 *
 * Este componente é responsável por configurar e renderizar a estrutura global da aplicação.
 * Ele inclui a configuração de estilos globais, a inicialização do sistema de tradução,
 * a criação do cliente de consulta React Query e a configuração do roteamento.
 */
const App = () => {
    useEffect(() => {
        getAuthStore();
    }, []);
    return (
        <>
            <GlobalStyle />
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={Routers} />
            </QueryClientProvider>
        </>
    );
};

export default App;
