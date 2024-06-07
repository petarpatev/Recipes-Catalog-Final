import * as api from "./api.js";

const endpoints = {
    recipes: '/data/recipes'
}


export const getAll = async () => {
    return api.get(endpoints.recipes);
}