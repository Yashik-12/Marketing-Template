const hamburger = document.querySelector(".hamburger"),
    navContainer = document.querySelector(".navlists"),
    navLink = document.querySelectorAll(".navlists a"),
    html = document.querySelector("html");

window.addEventListener('load',() => {
    // Hamburger Functionality
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navContainer.classList.toggle("active-nav");
        html.classList.toggle("html-scroll");
    })
    
    //remove active
    navLink.forEach(e => {
        e.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navContainer.classList.remove("active-nav");
            html.classList.remove("html-scroll");
        })
    });
})
