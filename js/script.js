var navbar = document.querySelector("nav.navbar");
var scrollTimeout;

window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        // The page is scrolled
        navbar.classList.add("navbar-scrolled");

        // Hide the navbar
        navbar.style.display = "none";

        // Clear any existing timeout
        clearTimeout(scrollTimeout);

        // Show the navbar after 1 second of no scrolling
        scrollTimeout = setTimeout(function() {
            navbar.style.display = "block";
        }, 1000);
    } else {
        // The page is at the top
        navbar.classList.remove("navbar-scrolled");
        navbar.style.display = "block";
    }
});
