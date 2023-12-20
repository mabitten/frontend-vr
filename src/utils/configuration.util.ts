import { QueryClient } from "@tanstack/react-query";

let queryClient: null | QueryClient = null;

/**
 * Inicia o cliente de consulta de reação.
 * @returns Uma instância do cliente de consulta.
 */
export const getQueryClient = (): QueryClient => {
    if (queryClient === null) {
        queryClient = new QueryClient();
        return queryClient;
    }

    return queryClient;
};
