const links = {
    '/': document.querySelector('h1 a'),
    '/catalog': document.getElementById('catalogLink'),
    '/create': document.getElementById('createLink'),
    '/login': document.getElementById('loginLink'),
    '/register': document.getElementById('registerLink'),
    'logout': document.getElementById('logoutBtn')
}

export const updateNav = (ctx, next) => {
    Object.values(links).forEach(button => button.classList.remove('active'));
    let currentBtn = links[ctx.pathname];
    currentBtn.classList.add('active');

    next();
}