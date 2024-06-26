import page from "../node_modules/page/page.mjs";

import { logout } from "./api/user.js";

import { preload } from "./middlewares/preload.js";
import { decorateContext } from "./middlewares/render.js";
import { addSession } from "./middlewares/session.js";
import { updateNav } from "./middlewares/updateNav.js";

import { catalogView } from "./views/catalog.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";

page(addSession);
page(updateNav);
page(decorateContext);
page('/', homeView);
page('/catalog', catalogView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/details/:recipeId', preload, detailsView);
page('/edit/:recipeId', preload, editView);

page.start();

//Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
    logout();
    page.redirect('/login');
});