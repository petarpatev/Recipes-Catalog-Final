import * as api from "./api.js";

const endpoints = {
    recipes: '/data/recipes?sortBy=_createdOn%20desc&pageSize=3&offset=',
    lastThree: '/data/recipes?select=_id%2Cname%2Cimg&sortBy=_createdOn%20desc&pageSize=3',
    getById: '/data/recipes/',
    create: '/data/recipes',
    recipesCount: '/data/recipes?count',
};

const pageSize = 3;

export const createRecipe = async (data) => {
    return api.post(endpoints.create, data);
}

export const deleteRecipe = async (id) => {
    return api.del(endpoints.getById + id)
}

export const getLastThree = async () => {
    return api.get(endpoints.lastThree);
}

export const getAll = async (page = 1) => {
    const [recipes, count] = await Promise.all([
        api.get(endpoints.recipes + (page - 1) * pageSize),
        api.get(endpoints.recipesCount)
    ])
    return {
        recipes,
        pages: Math.ceil(count / pageSize)
    };
}

export const getById = async (id) => {
    return api.get(endpoints.getById + id)
}