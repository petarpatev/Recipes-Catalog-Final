import { html } from "../../node_modules/lit-html/lit-html.js";
import * as recipeService from "../api/recipe.js";

const editTemplate = (recipe, editHandler) => html`
<section id="edit">
            <article>
                <h2>Edit Recipe</h2>
                <form id="editForm" @submit=${editHandler}>
                    <input type="hidden" name="_id" value=${recipe._id}>
                    <label>Name: <input type="text" name="name" placeholder="Recipe name" value=${recipe.name}></label>
                    <label>Image: <input type="text" name="img" placeholder="Image URL" value=${recipe.img}></label>
                    <label class="ml">Ingredients: <textarea name="ingredients"
                            placeholder="Enter ingredients on separate lines">${recipe.ingredients.join('\n')}</textarea></label>
                    <label class="ml">Preparation: <textarea name="steps"
                            placeholder="Enter preparation steps on separate lines">${recipe.steps.join('\n')}</textarea></label>
                    <input type="submit" value="Save Changes">
                </form>
            </article>
        </section>
`

export const editView = async (ctx) => {
    
    const oldRecipeId = ctx.params.recipeId;
    const oldRecipe = await recipeService.getById(oldRecipeId);

    const editHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const img = formData.get('img');
        const ingredients = formData.get('ingredients').split('\n');
        const steps = formData.get('steps').split('\n');

        const newRecipe = await recipeService.editRecipe(oldRecipeId, { name, img, ingredients, steps });
        e.target.reset();
        ctx.page.redirect(`/details/${newRecipe._id}`);

    }

    ctx.render(editTemplate(oldRecipe, editHandler))
}