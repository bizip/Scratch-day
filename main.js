window.onload = () => {
    let menuContainer = document.getElementById("mob-container");
    let menu = document.querySelectorAll(".mob-click");
    menu.forEach(el => {
        el.addEventListener('click', () => {
            menuContainer.classList.toggle('disapear');
        })

    })
}
