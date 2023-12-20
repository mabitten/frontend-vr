import { decodeAccessToken, isValidAccessToken } from "@/utils";

const ValidToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjo0MTIzNDQwMDAwMDAwLCJpYXQiOjE2Nzg5NzA0OTMsImp0aSI6ImNhOTZiY2JjZDA2MzQzNDQ5ZDBlNTFlNWVlYTNhNDcxIiwidXNlcl9pZCI6ImExOWZkN2EwLTg4ZjUtNGUzMC1iM2NiLTQwNDBmMDAxYmJlOCJ9.c1je_Qmf2mMlYX4pKv-qZ49OaZgpgp3CdX1M1vxihYg";

const expiredToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc4OTcwNzkzLCJpYXQiOjE2Nzg5NzA0OTMsImp0aSI6ImNhOTZiY2JjZDA2MzQzNDQ5ZDBlNTFlNWVlYTNhNDcxIiwidXNlcl9pZCI6ImExOWZkN2EwLTg4ZjUtNGUzMC1iM2NiLTQwNDBmMDAxYmJlOCJ9.7HPXb_C6sbNSrr2cd2VQoZW-OdwzjaYdjJhhnmaM9Dk";

describe("Test scenarios for: isValidAccessToken", () => {
    it("Should return that the token is INVALID", () => {
        const invalid = isValidAccessToken(expiredToken);

        expect(invalid).toBeFalsy();
    });

    it("Should return that the token is VALID", () => {
        const valid = isValidAccessToken(ValidToken);

        expect(valid).toBeTruthy();
    });
});

describe("Test scenarios for: isValidAccessToken", () => {
    it("Should return default object when access token empty", () => {
        const invalid = decodeAccessToken("");

        expect(invalid).toMatchObject({
            exp: -1,
            iat: -1,
            jti: "",
            user_id: "",
        });
    });

    it("Should return the decripted token for the token", () => {
        const valid = decodeAccessToken(ValidToken);

        expect(valid).toMatchObject({
            exp: 4123440000000,
            iat: 1678970493,
            jti: "ca96bcbcd06343449d0e51e5eea3a471",
            token_type: "access",
            user_id: "a19fd7a0-88f5-4e30-b3cb-4040f001bbe8",
        });
    });
});
