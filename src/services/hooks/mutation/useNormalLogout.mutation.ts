import { type AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { clearUser } from "@/utils";
import { useNavigate } from "react-router-dom";

/**
 * Execute to obtain the runtime mutation that holds the normal login logic.
 */
export const useNormalLogout = () => {
    const navigate = useNavigate();

    return useMutation({
        /**
         * Função que chama limpadores de dados do usuário
         */
        mutationFn: async () => {
            await clearUser();
        },
        /**
         * Log error
         *
         * #TODO: adicionar modo dev
         */
        onError: (error: AxiosError<Record<string, string>>) => {
            console.log({ useNormalLogout_ERROR: error });
        },
        /**
         * Redireciona para tela de login
         */
        onSuccess: () => {
            navigate("/");
        },
    });
};
