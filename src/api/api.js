import { clearUser, getToken } from "../utils.js";

const host = 'http://localhost:3030';

const request = async (method, url, data) => {

    let options = {
        method,
        headers: {}
    }

    //set options object
    let token = getToken();

    if (token) {
        options.headers['X-Authorization'] = token;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    //check response from request
    try {
        const response = await fetch(host + url, options);
        if (response.ok != true) {
            if (response.status == 403) {
                clearUser();
            }
            const error = await response.json();
            throw new Error(error.message);
        }
        if (response.status == 204) {
            return response;
        } else {
            return response.json()
        }
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

export const get =  request.bind(null, 'get');
export const post =  request.bind(null, 'post');
export const put =  request.bind(null, 'put');
export const del =  request.bind(null, 'delete');