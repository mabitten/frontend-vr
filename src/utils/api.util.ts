import axios, { type AxiosInstance } from "axios";

type TInstances = {
    authInstance: AxiosInstance;
    instanceRest: AxiosInstance;
};

/**
 * Inicialize todas as instâncias possíveis do axios que possamos precisar para consultar APIs.
 * @returns Um objeto com todas as instâncias
 */
const getInstances = (): TInstances => {
    return {
        authInstance: axios.create({
            baseURL: import.meta.env.VITE_BASE_URL,
            headers: {
                "Content-Type": "application/json",
            },
        }),
        instanceRest: axios.create({
            baseURL: import.meta.env.VITE_BASE_URL,
            headers: {
                "Content-Type": "application/json",
            },
        }),
    };
};

export const authInstance = getInstances().authInstance;
export const restInstance = getInstances().instanceRest;
