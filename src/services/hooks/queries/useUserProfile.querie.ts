import { getUserProfile } from "@/services";
import { queryKeys, useIsLogged } from "@/services/hooks";
import { useQuery } from "@tanstack/react-query";
import { type AxiosError } from "axios";

/**
 * Retorna os dados completo do usuário logado
 */
export const useUserProfile = (enabled = true) => {
    const { data: username = "" } = useIsLogged();

    return useQuery(queryKeys.userProfile, {
        enabled: username?.length > 0 || enabled,
        /**
         * Retorno de erro
         * #TODO: adicionar modo dev
         */
        onError: (error: AxiosError) => {
            console.log("useUserProfile: ", error);
        },
        /**
         * Retornar usuario logado
         */
        queryFn: async () => {
            if (username) {
                const user = await getUserProfile(username);
                return user;
            }

            return null;
        },
        retry: 1,
    });
};
