window.addEventListener("load", function () {
    ScrollTrigger.refresh();
});


function lenisScroll() {

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

}
lenisScroll()








// onLoadAnimation

function onLoadAnimation() {
    const tl1 = gsap.timeline({
        delay:0.5
    });

    tl1.from(".h-left, .h-right",{
        y:-100,
        duration: 1,
    }, "loadercorners") 
    tl1.from(".fixed-social-right, .fixed-contact-left",{
        y:100,
        duration: 1,
    }, "loadercorners")


}

onLoadAnimation();








// contact page

function contactPageOnLoad() {
    const tl5 = gsap.timeline({
        delay:0.5
    });

    tl5.from(".get-in-touch-txt h6",{
        y:50,
        duration: 0.5,
        opacity:0
    }, "contactAnimation") 
    tl5.from(".get-in-touch-txt a",{
        y:50,
        duration: 0.6,
        opacity:0,
        stagger:0.2
    })

    tl5.from(".contact-img img",{
        clipPath: "inset(0 100% 0 0)",
        duration: 0.6
    },"-0.1")

    tl5.from(".say-hi svg",{
        y:550,
        duration: 0.6
    }, "contactAnimation")
}

contactPageOnLoad();