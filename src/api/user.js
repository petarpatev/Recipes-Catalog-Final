import { clearUser, setUser } from "../utils.js";
import * as api from "./api.js";

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
}

export const login = async (email, password) => {
    const user = await api.post(endpoints.login, { email, password });
    setUser(user);
    return user;
}

export const register = async (email, password) => {
    const user = await api.post(endpoints.register, { email, password });
    setUser(user);
    return user;
}

export const logout = async () => {
    api.get(endpoints.logout);
    clearUser();
}