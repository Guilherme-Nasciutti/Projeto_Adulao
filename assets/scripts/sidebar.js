document.addEventListener("DOMContentLoaded", function () {
    const hamburguer = document.getElementById('expand');
    const sidebar = document.querySelector('.sidebar');
    const toolbar = document.querySelector('.toolbar');

    hamburguer.addEventListener("click", function () {
        sidebar.classList.toggle('hide_sidebar');
        toolbar.classList.toggle('toolbar_full');
    });
});
