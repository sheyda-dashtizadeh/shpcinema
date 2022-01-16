// Search Style
function searchToggle() {
    const search_btn = document.getElementById('search-bt');
    search_btn.classList.toggle("d-md-none");
}

// Change background Navbar on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    nav.classList.toggle('scrolled', window.scrollY > 1);
});

// Active Navbar Item on scroll
const sections = document.querySelectorAll("section[id]");
console.log(sections);
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 10;
        sectionId = current.getAttribute("id");

        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document.querySelector(".navbar-nav a[href*=" + sectionId + "].nav-link").classList.add("active");
        } else {
            document.querySelector(".navbar-nav a[href*=" + sectionId + "].nav-link").classList.remove("active");
        }
    });
}
