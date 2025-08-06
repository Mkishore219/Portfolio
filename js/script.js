// Register GSAP Plugins
    gsap.registerPlugin(SplitText, ScrollTrigger, CustomEase);
    CustomEase.create("hop", ".87, 0, .3, 1");

    // Smooth Scrolling with Lenis
    function initLenis() {
        const lenis = new Lenis({
            duration: 1.2,
            easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });

        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add(time => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
    }
    initLenis();

    // Custom Cursor
    function initCursor() {
        const cursor = document.querySelector("#cursor");
        if (!cursor) return;

        document.body.addEventListener("mousemove", (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 1,
                ease: "back.out"
            });
        });
    }
    initCursor();

    // SplitText Animation
    function animateSplitText(selector) {
        document.querySelectorAll(selector).forEach(el => {
            if (!el || el.offsetParent === null) return;

            // Clean previous instance if exists
            if (el._splitTextInstance) {
                el._splitTextInstance.revert();
            }

            const split = new SplitText(el, {
                type: "lines",
                linesClass: "line-child",
                mask: "lines"
            });

            el._splitTextInstance = split;

            if (split.lines.length) {
                gsap.from(split.lines, {
                    y: 150,
                    duration: 1,
                    ease: "hop",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                });
            }
        });
    }

    // Trigger animation once fonts are ready
    function initSplitTextAnimation() {
        const selector = "h3, h4, h5, p";
        if (document.fonts) {
            document.fonts.ready.then(() => animateSplitText(selector));
        } else {
            animateSplitText(selector);
        }
    }

    // Re-initialize on resize/orientation
    function handleResize() {
        let lastWidth = window.innerWidth;
        let resizeTimeout;

        const reAnimate = () => {
            initSplitTextAnimation();
            ScrollTrigger.refresh();
        };

        window.addEventListener("resize", () => {
            if (window.innerWidth !== lastWidth) {
                lastWidth = window.innerWidth;
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(reAnimate, 250);
            }
        });

        window.addEventListener("orientationchange", reAnimate);
    }

    // Reveal Image ClipPath Animation
    function revealImages(selector = "img") {
        document.querySelectorAll(selector).forEach(img => {
            img.style.willChange = "opacity, transform, clip-path";

            gsap.fromTo(img,
                {
                    clipPath: "inset(0 0 100% 0)"
                },
                {
                    clipPath: "inset(0 0 0% 0)",
                    duration: 1.6,
                    ease: "hop",
                    scrollTrigger: {
                        trigger: img,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }

    // Initialize All
    window.addEventListener("load", () => {
        ScrollTrigger.refresh();
        initSplitTextAnimation();
        handleResize();
        revealImages("img");
    });