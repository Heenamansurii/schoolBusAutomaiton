declare const process: { env: Record<string, string | undefined> };

export const loginData = {
    validLogin: {
        phone: process.env.SCHOOLBUS_PHONE!,
        password: process.env.SCHOOLBUS_PASSWORD!
    }
};