import * as api from "./api.js";

const endpoints = {
    recipes: '/data/recipes',
    lastThree: '/data/recipes?select=_id%2Cname%2Cimg&sortBy=_createdOn%20desc&pageSize=3',
    getById: '/data/recipes/',
    create: '/data/recipes'
}

export const createRecipe = async (data) => {
    return api.post(endpoints.create, data)
}

export const getLastThree = async () => {
    return api.get(endpoints.lastThree);
}

export const getAll = async () => {
    return api.get(endpoints.recipes);
}

export const getById = async (id) => {
    return api.get(endpoints.getById + id)
}