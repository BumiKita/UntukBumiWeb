gsap.registerPlugin(ScrollTrigger);

const scrollheader = gsap.timeline({
    scrollTrigger: {
        trigger: "#reason",
        start: "top bottom",
        end: "top top",
        scrub: true,
        pin: "#beranda",
        pinSpacing: false,
        toggleActions: ""
    },
})

scrollheader.to("#motto",
{
    x: -1500,

}, 0);
scrollheader.to("#header-left",
{
    x: -1000,

}, 0);
scrollheader.to("#header-right",
{
    x: 1000,
}, 0)
