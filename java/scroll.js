
// Scrol com delay

const menuScroll = document.querySelectorAll('#menu a');

function getDistanceFromTheTop(element) {

    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop

}

function nativeScroll(distanceFromTheTop) {

    window.scroll({

        top: distanceFromTheTop,
        behavior: "smooth",

    });

}


function scrollToSection(event) {

    event.preventDefault();

    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 120;

    nativeScroll(distanceFromTheTop);

}

menuScroll.forEach((link) => {

    link.addEventListener("click", scrollToSection);

});