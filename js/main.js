const sr = ScrollReveal();

sr.reveal(".header-hr", {
    duration: 2000,
    scale: "0.1"
})

sr.reveal("h1", {
    delay: 1000,
    origin: "top",
    distance: "70px",
    duration: 3000
});

sr.reveal(".header-h2", {
    delay: 1000,
    origin: "bottom",
    distance: "70px",
    duration: 3000
});

sr.reveal(".fab", {
    scale: "0.1",
    duration: 3000
})

sr.reveal(".h2-sr", {
    origin: "right",
    distance: "100px",
    opacity: "0.1",
    duration: 1500
})

sr.reveal("span", {
    origin: "right",
    distance: "100px",
    duration: 4000
})

sr.reveal(".citation", {
    origin: "left",
    distance: "60px",
    duration: 3000
})