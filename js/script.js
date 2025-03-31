
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseover", () => {
        button.classList.add("hovered");
    });
    button.addEventListener("mouseleave", () => {
        button.classList.remove("hovered");
    });
});

const fadeInElements = document.querySelectorAll(".fade-in");

const fadeInObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.3 });

fadeInElements.forEach(el => fadeInObserver.observe(el));

const searchInput = document.querySelector("#search-bar");
const items = document.querySelectorAll(".search-item");

searchInput.addEventListener("keyup", () => {
    const searchText = searchInput.value.toLowerCase();
    items.forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(searchText) ? "block" : "none";
    });
});
