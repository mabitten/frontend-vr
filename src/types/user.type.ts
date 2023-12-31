export type TSingleUserResponse = {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
};

export type TSingleUser = {
    accessToken: string;
    refreshToken: string;
    userId: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
};

export type TUserProfileResponse = {
    users: Array<{
        id: number;
        firstName: string;
        lastName: string;
        maidenName: string;
        age: number;
        gender: string;
        email: string;
        phone: string;
        username: string;
        password: string;
        birthDate: string;
        image: string;
        bloodGroup: string;
        height: number;
        weight: number;
        eyeColor: string;
        hair: {
            color: string;
            type: string;
        };
        domain: string;
        ip: string;
        address: {
            address: string;
            city: string;
            coordinates: {
                lat: number;
                lng: number;
            };
            postalCode: string;
            state: string;
        };
        macAddress: string;
        university: string;
        bank: {
            cardExpire: string;
            cardNumber: string;
            cardType: string;
            currency: string;
            iban: string;
        };
        company: {
            address: {
                address: string;
                city: string;
                coordinates: {
                    lat: number;
                    lng: number;
                };
                postalCode: string;
                state: string;
            };
            department: string;
            name: string;
            title: string;
        };
        ein: string;
        ssn: string;
        userAgent: string;
    }>;
};

export type TUserProfileSanitized = Omit<TSingleUser, "accessToken" | "refreshToken"> & {
    birthDay: string;
    phone: string;
};
