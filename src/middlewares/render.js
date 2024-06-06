import { render } from "../../node_modules/lit-html/lit-html.js";

const rootElement = document.getElementById('root');

const ctxRender = (template) => {
    render(template, rootElement);
}

export const decorateContext = (ctx, next) => {
    ctx.render = ctxRender;

    next();
}