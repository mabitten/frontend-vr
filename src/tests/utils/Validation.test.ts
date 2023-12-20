import { LoginSchema } from "@/utils";

describe("Test scenarios for: LoginSchema", () => {
    it("should validate a valid login object", async () => {
        const validLogin = {
            username: "user123",
            password: "password123",
        };

        await expect(LoginSchema.validate(validLogin)).resolves.toEqual(validLogin);
    });

    it("should fail validation with missing username", async () => {
        const invalidLogin = {
            password: "password123",
        };

        await expect(LoginSchema.validate(invalidLogin)).rejects.toThrow();
    });

    it("should fail validation with missing password", async () => {
        const invalidLogin = {
            username: "user123",
        };

        await expect(LoginSchema.validate(invalidLogin)).rejects.toThrow();
    });

    it("should fail validation with empty username and password", async () => {
        const invalidLogin = {
            username: "",
            password: "",
        };

        await expect(LoginSchema.validate(invalidLogin)).rejects.toThrow();
    });
});
