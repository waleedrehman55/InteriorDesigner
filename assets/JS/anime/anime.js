let menubtn = document.querySelector('.navmenu');
let menuwall = document.querySelector('.menuwall');

const tl = gsap.timeline({defaults: {ease: "power4.inOut"}});

menubtn.addEventListener('click', function() {
    tl.to(menuwall, {
        delay: 0.5,
        duration: 1.5,
        y: "-2%",
        ease: "power4.inOut",
    });
    tl.from('.menucontent h5', {
        stagger: 0.2,
        y: 10,
        duration: 1,
        opacity: 0,
        ease: "power4.inOut",
    });
});