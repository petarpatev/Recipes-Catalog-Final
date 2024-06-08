import page from "../node_modules/page/page.mjs";

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
page('/details/:recipeId', detailsView);
page('/edit', editView);

page.start();