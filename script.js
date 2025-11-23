// =============================
// Mobile Navigation Toggle
// =============================
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('open');
});


// =============================
// Smooth Scroll for Navbar links
// =============================
const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        // Close menu after clicking on mobile
        navbar.classList.remove("active");
        menuBtn.classList.remove("open");
    });
});


// =============================
// Simple Button Hover Effect
// =============================
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.classList.add("hovered");
    });

    btn.addEventListener("mouseleave", () => {
        btn.classList.remove("hovered");
    });
});


// =============================
// Optional: Contact Form Validation
// =============================
const form = document.querySelector("form");
if(form){
    form.addEventListener("submit", (e) => {
        const email = document.querySelector("#email");
        const name = document.querySelector("#name");

        if(email.value === "" || name.value === ""){
            alert("Please fill all required fields.");
            e.preventDefault();
        }
    });
}
