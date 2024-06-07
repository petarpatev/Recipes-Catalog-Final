import { render } from "../../node_modules/lit-html/lit-html.js";

const rootElement = document.getElementById('root');
const spinnerElement = document.querySelector('.lds-roller');

const showSpinner = () => {
    spinnerElement.style.display = '';
}

const hideSpinner = () => {
    spinnerElement.style.display = 'none';
}

const ctxRender = (template) => {
    hideSpinner();
    render(template, rootElement);
}

export const decorateContext = (ctx, next) => {
    showSpinner();
    ctx.render = ctxRender;

    next();
}