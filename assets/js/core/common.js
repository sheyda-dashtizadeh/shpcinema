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
