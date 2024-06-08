const links = {
    '/catalog': document.getElementById('catalogLink'),
    '/create': document.getElementById('createLink'),
    '/login': document.getElementById('loginLink'),
    '/register': document.getElementById('registerLink'),
    'logout': document.getElementById('logoutBtn')
}

const guestBtns = document.getElementById('guest');
const userBtns = document.getElementById('user');

export const updateNav = (ctx, next) => {
    Object.values(links).forEach(button => button.classList.remove('active'));

    let currentBtn = links[ctx.pathname];
    if (currentBtn) {
        currentBtn.classList.add('active');
    }

    const user = ctx.user;
    if (user) {
        guestBtns.style.display = 'none';
        userBtns.style.display = 'inline-block';
    } else {
        guestBtns.style.display = 'inline-block';
        userBtns.style.display = 'none';
    }

    next();
}