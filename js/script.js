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
    const tl1 = gsap.timeline();

    tl1.from("#loader-cover .loader1", {
        display: "block"
    })
    tl1.from("#loader-cover .loader1", {
        display: "block",
        width: "0%",
        duration: 0.7
    })

    tl1.from("#loader-cover .loader2", {
        display: "block"
    })
    tl1.from("#loader-cover .loader2", {
        display: "block",
        width: "0%",
        duration: 0.7
    })

    tl1.to("#loader-cover .loader1", {
        height: "100%",
        width: "100%",
        duration: 0.7
    })
    tl1.to("#loader-cover .loader2", {
        height: "100%",
        width: "100%",
        duration: 0.7
    })
    tl1.to("#loader-cover", {
        opacity: 0,
        display: "none"
    })







    tl1.from(".h-left, .h-right", {
        y: -100,
        duration: 1,
    }, "loadercorners")
    tl1.from(".fixed-social-right, .fixed-contact-left", {
        y: 100,
        duration: 1,
    }, "loadercorners")

    tl1.from("#banner img", {
        clipPath: "inset(0 100% 0 0)",
        duration: 1,
        delay: 1,       
        repeat: -1,     
        yoyo: true,      
        repeatDelay: 2,   
        scale: 1.8
    }, "onload");

    tl1.from("#banner h2", {
        y: 350,
        duration: 0.5,
        opacity: 0
    }, "onload")

}

onLoadAnimation();














// ÷introduction

function introductionSection() {

    document.addEventListener("DOMContentLoaded", () => {
        // Register plugin FIRST
        gsap.registerPlugin(SplitText);

        // Then use SplitText
        const amination = new SplitText(".main-intro-txt", {
            type: "chars,words,lines",
            wordsClass: "word++", /* turn this on to get classes for each words */
            autoSplit: true,
            mask: "lines",
            onSplit: (self) => {
                split = gsap.from(self.lines, {
                    y: 30,
                    autoAlpha: 0,
                    stagger: {
                        amount: 2,
                        // from: "random"
                    },
                    scrollTrigger: {
                        trigger: ".main-intro-txt",
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                });
            }
        });

        // Animate (example)

    });

}
introductionSection()








// ÷work

function workSection() {
    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#work",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    tl3.from("#work", {
        borderRadius: 0,
        duration: 1.5,
        ease: "power2.out"
    });



    //   ÷
    document.addEventListener("DOMContentLoaded", () => {
        // Register plugin FIRST
        gsap.registerPlugin(SplitText);

        // Then use SplitText
        const amination = new SplitText("#work h3", {
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
                        trigger: "#work",
                        start: "top 60%",
                        toggleActions: "play none none reverse",
                        // markers:"true"
                    }
                });
            }
        });

    });

    document.querySelectorAll("section#work .col-md-6 img").forEach(img => {
        gsap.to(img, {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: img,
                start: "top 70%",
                toggleActions: "play none none reverse",
                // markers: true
            }
        });
    });



}

workSection();







// about

function aboutSection() {
    const tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });


    //   ÷
    document.addEventListener("DOMContentLoaded", () => {
        // Register plugin FIRST
        gsap.registerPlugin(SplitText);

        // Then use SplitText
        const amination = new SplitText("#about h4", {
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
                        trigger: "#about h4",
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                        // markers:"true"
                    }
                });
            }
        });


        // // // // // .abt-content-main // // // // // // 

        // Then use SplitText
        const amination1 = new SplitText("#about .abt-content-main", {
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
                        trigger: "#about .abt-content-main",
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                        // markers:"true"
                    }
                });
            }
        });

    });



    gsap.to("section#about .col-md-4 img ", {
        clipPath: "inset(0 0 0% 0)",
        duration: 1.5,
        scrollTrigger: {
            trigger: "section#about .col-md-4 img",
            start: "top 70%",
            toggleActions: "play none none reverse",
            // markers:true
        }
    })



}

aboutSection();




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

