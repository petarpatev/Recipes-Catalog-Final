import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/user.js";

const loginTemplate = (onSubmit) => html`
<section id="login">
            <article>
                <h2>Login</h2>
                <form id="loginForm" @submit=${onSubmit}>
                    <label>E-mail: <input type="text" name="email"></label>
                    <label>Password: <input type="password" name="password"></label>
                    <input type="submit" value="Login">
                </form>
            </article>
        </section>
`

export const loginView = (ctx) => {

    const onSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        await login(email, password);
        e.target.reset();
        ctx.page.redirect('/');
    }

    ctx.render(loginTemplate(onSubmit))
}