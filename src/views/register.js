import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/user.js";

const registerTemplate = (onSubmit) => html`
<section id="register">
            <article>
                <h2>Register</h2>
                <form id="registerForm" @submit=${onSubmit}>
                    <label>E-mail: <input type="text" name="email"></label>
                    <label>Password: <input type="password" name="password"></label>
                    <label>Repeat: <input type="password" name="rePass"></label>
                    <input type="submit" value="Register">
                </form>
            </article>
        </section>
`

export const registerView = (ctx) => {
    const onSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        await register(email, password);
        e.target.reset();
        ctx.page.redirect('/');
    }
    ctx.render(registerTemplate(onSubmit))
}