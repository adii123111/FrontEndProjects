gsap.registerPlugin(ScrollTrigger);

// Pin section2 and animate its content
ScrollTrigger.create({
    trigger: "#section2",
    start: "top top", // Start pinning when the top of section2 hits the top of the viewport
    end: "bottom top", // End pinning when the bottom of section2 hits the top of the viewport
    pin: true, // Pin the section
    scrub: 1, // Smooth scrubbing effect
    markers: true, // Add markers for debugging (optional)
});

// Animate section2's heading
gsap.from("#section2 h1", {
    scrollTrigger: {
        trigger: "#section2",
        start: "top center", // Start animation when the top of section2 hits the center of the viewport
        end: "bottom center", // End animation when the bottom of section2 hits the center of the viewport
        scrub: 1, // Smooth scrubbing effect
    },
    opacity: 0,
    y: 100,
    duration: 2,
});

// Animate section3's heading
gsap.from("#section3 h1", {
    scrollTrigger: {
        trigger: "#section3",
        start: "top center", // Start animation when the top of section3 hits the center of the viewport
        end: "bottom center", // End animation when the bottom of section3 hits the center of the viewport
        scrub: 1, // Smooth scrubbing effect
    },
    opacity: 0,
    y: 100,
    duration: 2,
});

// Animate section4's heading
gsap.from("#section4 h1", {
    scrollTrigger: {
        trigger: "#section4",
        start: "top center", // Start animation when the top of section4 hits the center of the viewport
        end: "bottom center", // End animation when the bottom of section4 hits the center of the viewport
        scrub: 1, // Smooth scrubbing effect
    },
    opacity: 0,
    y: 100,
    duration: 2,
});