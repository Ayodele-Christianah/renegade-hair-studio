/* =========================================
RENEGADE HAIR STUDIO
JavaScript
========================================= */

/* =========================================

1. MOBILE MENU
   ========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const desktopNav = document.querySelector(".desktop-nav");

// Create mobile menu
if (menuToggle && desktopNav) {


menuToggle.addEventListener("click", function () {

    desktopNav.classList.toggle("mobile-active");

    const isOpen = desktopNav.classList.contains("mobile-active");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


/* =========================================
   CLOSE MENU WHEN LINK IS CLICKED
========================================= */

const navigationLinks = desktopNav.querySelectorAll("a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        desktopNav.classList.remove("mobile-active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open menu"
        );

        menuToggle.textContent = "☰";

    });

});


/* =========================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener("click", function (event) {

    const clickedInsideMenu =
        desktopNav.contains(event.target);

    const clickedMenuButton =
        menuToggle.contains(event.target);


    if (
        !clickedInsideMenu &&
        !clickedMenuButton &&
        desktopNav.classList.contains("mobile-active")
    ) {

        desktopNav.classList.remove("mobile-active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open menu"
        );

        menuToggle.textContent = "☰";

    }

});


/* =========================================
   CLOSE MENU WITH ESCAPE KEY
========================================= */

document.addEventListener("keydown", function (event) {

    if (
        event.key === "Escape" &&
        desktopNav.classList.contains("mobile-active")
    ) {

        desktopNav.classList.remove("mobile-active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open menu"
        );

        menuToggle.textContent = "☰";

    }

});


}

/* =========================================
2. PREVENT EMPTY LINKS FROM JUMPING
========================================= */

const emptyLinks = document.querySelectorAll('a[href="#"]');

emptyLinks.forEach(function (link) {


link.addEventListener("click", function (event) {

    event.preventDefault();

});


});

/* =========================================
3. HEADER SHADOW ON SCROLL
========================================= */

const header = document.querySelector(".site-header");

window.addEventListener("scroll", function () {


if (!header) return;

if (window.scrollY > 20) {

    header.classList.add("scrolled");

} else {

    header.classList.remove("scrolled");

}


});

/* =========================================
4. FADE-IN ANIMATION
========================================= */

const animatedSections = document.querySelectorAll(
".about-section, .services-section, .work-section, .team-section, .reviews-section"
);

const observer = new IntersectionObserver(
function (entries) {


    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

},
{
    threshold: 0.15
}


);

animatedSections.forEach(function (section) {


observer.observe(section);


});

/* =========================================
5. CURRENT YEAR
========================================= */

const currentYear = new Date().getFullYear();

const footerYear = document.querySelector(
".footer-bottom p:first-child"
);

if (footerYear) {


footerYear.textContent =
    "© " + currentYear + " Renegade Hair Studio";


}
