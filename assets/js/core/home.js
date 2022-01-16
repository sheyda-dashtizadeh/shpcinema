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
