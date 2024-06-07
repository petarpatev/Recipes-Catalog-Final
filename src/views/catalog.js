import { html } from "../../node_modules/lit-html/lit-html.js";
import * as recipeService from "../api/recipe.js";

const recipeTemplate = (recipe) => html`
<a class="card" href="/details/${recipe._id}">
                <article class="preview">
                    <div class="title">
                        <h2>
                            ${recipe.name}
                        </h2>
                    </div>
                    <div class="small"><img src=${recipe.img}></div>
                </article>
            </a>
`

const catalogTemplate = (recipes) => html`
<section id="catalog">
            <div class="section-title">
                <form id="searchForm">
                    <input type="text" name="search" value="">
                    <input type="submit" value="Search">
                </form>
            </div>
            <header class="section-title">
                Page
                1 of 1 
            </header>

            ${recipes.map(recipeTemplate)}


            <footer class="section-title">

                Page
                    1 of 1
            </footer>
        </section>
`

export const catalogView = async (ctx) => {

    const recipes = await recipeService.getAll();
    ctx.render(catalogTemplate(recipes))
}