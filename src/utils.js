export const getUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}

export const clearUser = () => {
    localStorage.removeItem('user');
}

export const setUser = (data) => {
    localStorage.setItem('user', data);
}

export const getToken = () => {
    let user = getUser();
    if (user) {
        return user.accessToken;
    } else {
        return null;
    }
}