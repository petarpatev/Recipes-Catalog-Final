import { html } from "../../node_modules/lit-html/lit-html.js";

const homeTemplate = () => html`
<section id="home">
            <div class="hero">
                <h2>Welcome to My Cookbook</h2>
            </div>
            <header class="section-title">Recently added recipes</header>
            <div class="recent-recipes">
                <a class="card" href="/details/985d9eab-ad2e-4622-a5c8-116261fb1fd2">
                    <article class="recent">
                        <div class="recent-preview"><img src="/assets/fish.jpg"></div>
                        <div class="recent-title">
                            Roast Trout
                        </div>
                    </article>
                </a>
                <div class="recent-space"></div>
                <a class="card" href="/details/8f414b4f-ab39-4d36-bedb-2ad69da9c830">
                    <article class="recent">
                        <div class="recent-preview"><img src="/assets/roast.jpg"></div>
                        <div class="recent-title">
                            Grilled Duck Fillet
                        </div>
                    </article>
                </a>
                <div class="recent-space"></div>
                <a class="card" href="/details/3987279d-0ad4-4afb-8ca9-5b256ae3b298">
                    <article class="recent">
                        <div class="recent-preview"><img src="/assets/lasagna.jpg"></div>
                        <div class="recent-title">
                            Easy Lasagna
                        </div>
                    </article>
                </a>
            </div>
            <footer class="section-title">
                <p>Browse all recipes in the <a href="/catalog">Catalog</a></p>
            </footer>
        </section>
`

export const homeView = (ctx) => {
    ctx.render(homeTemplate())
}