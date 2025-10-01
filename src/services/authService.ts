import api from "./api";

export async function login(identifier: string, password: string) {
    const response = await api.post("/auth/local", {identifier, password});
    return response.data;
}

export async function register(email: string, username: string, password: string) {
    const response = await api.post("/auth/local/register", {email, username, password})
    return response.data;
}

export async function getMe() {
    const response = await api.get("/users/me");
    return response.data;
}