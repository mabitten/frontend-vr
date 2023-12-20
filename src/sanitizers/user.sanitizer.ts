import {
    type TUserProfileResponse,
    type TSingleUser,
    type TSingleUserResponse,
    type TUserProfileSanitized,
} from "@/types";

/**
 * Faz a limpeza de uma response retornando apenas o necessário
 */
export const sanitizerUser = (response: TSingleUserResponse): TSingleUser => {
    return {
        accessToken: response.token,
        refreshToken: response.token,
        userId: response.id,
        username: response.username,
        email: response.email,
        firstName: response.firstName,
        lastName: response.lastName,
        gender: response.gender,
        image: response.image,
    };
};

/**
 * Faz a limpeza de uma response retornando apenas o necessário
 */
export const sanitizerUserProfile = (response: TUserProfileResponse): TUserProfileSanitized => {
    const users = response.users[0];

    return {
        userId: users.id,
        username: users.username,
        email: users.email,
        firstName: users.firstName,
        lastName: users.lastName,
        gender: users.gender,
        image: users.image,
        birthDay: users.birthDate,
        phone: users.phone,
    };
};
