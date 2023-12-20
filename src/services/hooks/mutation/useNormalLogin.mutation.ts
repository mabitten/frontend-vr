import { type AxiosError } from "axios";
import { type LoginFields } from "@/types";
import { postLogin } from "@/services";
import { setUser } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import { mutationKeys } from "..";

/**
 * Mutation para relizar lógica para fazer login
 */
export const useNormalLogin = () => {
    return useMutation({
        /**
         * Função de gatilho de login
         */
        mutationFn: async ({ username = "", password = "" }: typeof LoginFields) => {
            const user = await postLogin(username, password);

            if (user) {
                await setUser(user);
                return user;
            }
        },
        mutationKey: mutationKeys.normalLogin,
        /**
         * Log error
         * #TODO: adicionar modo dev
         */
        onError: (error: AxiosError<Record<string, string>>) => {
            console.log({ useNormalLogin_ERROR: error });
            console.log({ details: error.response?.data });
        },
    });
};
