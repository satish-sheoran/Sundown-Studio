const scroll = new LocomotiveScroll({
    el: document.querySelector('.wrapper'),
    smooth: true
});

window.addEventListener("load", () => {
    scroll.update();
});