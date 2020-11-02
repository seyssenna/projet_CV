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

//////////////DARK MODE/////////////////


// On sélectionne le bouton
const btn = document.querySelector(".switch_theme_color");
// On récupère le thème dans le link css avec l'id #theme-link
const theme = document.querySelector("#theme-link");

// On active la fonction au click sur le bouton
btn.addEventListener("click", function () {
  // Si l'URL contient "css/styles_light.css"
  if (theme.getAttribute("href") == "css/styles_light.css") {
    // ... Alors on bascule sur "css/styles_dark.css"
    theme.href = "css/styles_dark.css";
    // Sinon...
  } else {
    // ...on passe en mode clair
    theme.href = "css/styles_light.css";
  }
});