import { queryKeys } from "@/services/hooks";
import { type TSingleUser } from "@/types";
import { authInstance, getQueryClient } from "@/utils";
import { jwtDecode } from "jwt-decode";

/**
 * Util para substituir o usuário sempre que ele estiver logado ou alterado.
 * @param user
 */
export const setUser = async (user?: TSingleUser) => {
    if (user) {
        setAuthToken(user?.accessToken, user?.username);
    }
};

/**
 * Retorna um token de acesso decodificado para ser usado como objeto.
 * @param accessToken
 */
export const decodeAccessToken = (accessToken?: string) => {
    if (!accessToken) {
        return {
            exp: -1,
            iat: -1,
            jti: "",
            token_type: "",
            user_id: "",
        };
    }

    return jwtDecode<{
        token_type: string;
        exp: number;
        iat: number;
        jti: string;
        user_id: string;
    }>(accessToken);
};

/**
 *
 */
export const isValidAccessToken = (accessToken?: string) => {
    if (!accessToken) {
        return false;
    }

    const decoded = decodeAccessToken(accessToken);
    const nowInSeconds = Math.floor(Date.now() / 1000);
    const isExpired = nowInSeconds > decoded.exp;

    return !isExpired;
};

/**
 * Salva dados de autenticação em storage e cache
 */
export const setAuthToken = (accessToken?: string, user?: string) => {
    authInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    localStorage.setItem("@Auth:token", accessToken ?? "");
    localStorage.setItem("@Auth:user", user ?? "");
    getQueryClient().setQueryData(queryKeys.isLogged, user);
};

/**
 * Sincroniza storage com cache
 */
export const getAuthStore = () => {
    const storageUser = localStorage.getItem("@Auth:user");
    const storageToken = localStorage.getItem("@Auth:token");

    if (storageUser && storageToken) {
        getQueryClient().setQueryData(queryKeys.isLogged, storageUser);
    }
};

/**
 * Remove token e user do local storage
 */
export const clearAuthTokens = () => {
    localStorage.removeItem("@Auth:user");
    localStorage.removeItem("@Auth:token");
};

/**
 * Obtem token atual
 */
export const getAccessToken = () => {
    const token = localStorage.getItem("@Auth:token");

    return token ?? "";
};

/**
 * Remove todos os dados do usuário no navegador e no app
 */
export const clearUser = async () => {
    clearAuthTokens();
    await getQueryClient().resetQueries(queryKeys.isLogged);
    getQueryClient().clear();
};
