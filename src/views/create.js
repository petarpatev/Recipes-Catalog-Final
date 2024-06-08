import { html } from "../../node_modules/lit-html/lit-html.js";
import { createRecipe } from "../api/recipe.js";

const createTemplate = (onSubmit) => html`
<section id="create">
            <article>
                <h2>New Recipe</h2>
                <form id="createForm" @submit=${onSubmit}>
                    <label>Name: <input type="text" name="name" placeholder="Recipe name"></label>
                    <label>Image: <input type="text" name="img" placeholder="Image URL"></label>
                    <label class="ml">Ingredients: <textarea name="ingredients"
                            placeholder="Enter ingredients on separate lines"></textarea></label>
                    <label class="ml">Preparation: <textarea name="steps"
                            placeholder="Enter preparation steps on separate lines"></textarea></label>
                    <input type="submit" value="Create Recipe">
                </form>
            </article>
        </section>
`

export const createView = (ctx) => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const img = formData.get('img');
        const ingredients = formData.get('ingredients').split('\n');
        const steps = formData.get('steps').split('\n');

        const newRecipe = await createRecipe({ name, img, ingredients, steps });
        e.target.reset();
        ctx.page.redirect(`/details/${newRecipe._id}`);
    }

    ctx.render(createTemplate(onSubmit));
}