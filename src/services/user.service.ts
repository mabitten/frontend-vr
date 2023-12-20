import { sanitizerUser, sanitizerUserProfile } from "@/sanitizers";
import { type TUserProfileResponse, type TSingleUserResponse } from "@/types";
import { authInstance, restInstance } from "@/utils";

/**
 * Retorna um usuário válido se o e-mail e a senha corresponderem.
 *
 * @param email O e-mail do usuário que deseja efetuar login.
 * @param password A senha do usuário que deseja efetuar login.
 */
export const postLogin = async (username = "", password = "") => {
    const response = await authInstance.post<TSingleUserResponse>("/auth/login", {
        username,
        password,
    });

    return sanitizerUser(response.data);
};

/**
 * Busca um usuário específico
 *
 * @param username Username do usuário a pesquisar
 */
export const getUserProfile = async (username: string) => {
    const response = await restInstance.get<TUserProfileResponse>(`/users/search?q=${username}`);

    return sanitizerUserProfile(response.data);
};
