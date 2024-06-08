import { html } from "../../node_modules/lit-html/lit-html.js";

const commentTemplate = () => html`
<div>
    <div class="section-title">
        Comments for Grilled Duck Fillet
    </div>

    <article class="new-comment">

        <h2>New comment</h2>
        <form id="commentForm">
            <textarea name="content" placeholder="Type comment"></textarea>
            <input type="submit" value="Add comment">
        </form>
    </article>
    <div class="comments">

        <ul>

            <li class="comment">
                <header>peter@abv.bg</header>
                <p>Great recipe!</p>
            </li>
        </ul>
    </div>
</div>`