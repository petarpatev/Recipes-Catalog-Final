
import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteRecipe } from "../api/recipe.js";

const detailsTemplate = (recipe, deleteHandler) => html`
<section id="details">

<article>
    <h2>
        ${recipe.name}
    </h2>
    <div class="band">
        <div class="thumb"><img src=${recipe.img}></div>
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map(i => html`<li>${i}</li>`)}
            </ul>
        </div>
    </div>
    <div class="description">
        <h3>Preparation:</h3>
        ${recipe.steps.map(s => html`<p>${s}</p>`)}
    </div>

    ${recipe._isOwner ? html`
        <div class="controls">
            <a class="actionLink" href="/edit/${recipe._id}">✎ Edit</a>
            <a class="actionLink" href="javascript:void(0)" @click=${deleteHandler}>✖ Delete</a>
        </div>` : nothing}
</article>
</section>
`

export const detailsView = async (ctx) => {

    const recipe = ctx.recipe;

    const deleteHandler = () => {
        deleteRecipe(recipe._id);
        ctx.page.redirect('/catalog');
    }
    
    ctx.render(detailsTemplate(recipe, deleteHandler));
}