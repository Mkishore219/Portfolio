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

    tl1.from("#individual-page-work h3", {
        y:100,
        duration: 0.5,
        opacity: 0
    })
    tl1.to("section#individual-page-work .col-md-12 img", {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.5,
             ease: "power2.out",
        });


}

onLoadAnimation();




function individualWorkSection() {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

    document.querySelectorAll("section#individual-page-work .col-md-6 img").forEach(img => {
        gsap.to(img, {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.5,
            ease: "power2.out", // optional ease
            scrollTrigger: {
                trigger: img,
                start: "top 70%",
                toggleActions: "play none none reverse",
                // markers: true
            }
        });
    });
}

individualWorkSection();









function footerSection() {



    //   ÷
    document.addEventListener("DOMContentLoaded", () => {
        // Register plugin FIRST
        gsap.registerPlugin(SplitText);

        // Then use SplitText
        const amination = new SplitText("footer h3", {
            type: "chars,words,lines",
            wordsClass: "word++", /* turn this on to get classes for each words */
            autoSplit: true,
            mask: "lines",
            onSplit: (self) => {
                split = gsap.from(self.lines, {
                    y: 30,
                    autoAlpha: 0,
                    stagger: {
                        amount: 0.5,
                        // from: "random"
                    },
                    scrollTrigger: {
                        trigger: "footer h3",
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                        // markers:"true"
                    }
                });
            }
        });

    });


}

footerSection();