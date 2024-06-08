import * as recipeService from "../api/recipe.js";

export const preload = async (ctx, next) => {
    const recipeId = ctx.params.recipeId;
    const recipe = await recipeService.getById(recipeId);
    recipe._isOwner = false;

    if (ctx.user && ctx.user._id == recipe._ownerId) {
        recipe._isOwner = true;
    }

    ctx.recipe = recipe;

    next();
}