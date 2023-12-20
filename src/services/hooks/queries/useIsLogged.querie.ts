import { getAccessToken, getQueryClient, isValidAccessToken } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/services/hooks";
import { getUserProfile } from "@/services";

/**
 * Retornar usuário atual ou valor cacheado
 */
export const useIsLogged = (params?: { enabled: boolean }) => {
    const { enabled = false } = params ?? {};

    return useQuery({
        enabled,
        initialData: "",
        /**
         * Log de erro
         * #TODO: adicionar modo dev
         */
        onError: (error: Error) => {
            console.log("useIsLogged_ERROR: ", error);
        },
        /**
         * Verifica token é valido e retornar usuário
         */
        queryFn: async () => {
            const username: string = getQueryClient().getQueryData(queryKeys.isLogged) ?? "";
            const accessToken = getAccessToken() ?? "";

            if (username && isValidAccessToken(accessToken)) {
                const user = await getUserProfile(username);

                if (user) {
                    return user.username;
                }

                return "";
            }

            return "";
        },
        queryKey: queryKeys.isLogged,
    });
};
