const menuMobile = document.getElementById("menu-mobile")

function toggleMenu(event) {

    if (event.type === 'touch') event.preventDefault()

    const nav = document.getElementById("nav")

    nav.classList.toggle('active')

}

menuMobile.addEventListener('click', toggleMenu)
menuMobile.addEventListener('touch', toggleMenu)