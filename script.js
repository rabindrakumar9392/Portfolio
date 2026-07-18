// ==========================================
// Portfolio JavaScript
// ==========================================

// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // Navbar Shadow on Scroll
    // ===============================

    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";

        } else {

            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";

        }

    });

    // ===============================
    // Active Navigation Link
    // ===============================

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    // ===============================
    // Smooth Scroll
    // ===============================

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            target.scrollIntoView({

                behavior: "smooth"

            });

        });


        // ==========================================
// Scroll To Top Button
// ==========================================

// Create Button
const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

// Show / Hide Button
window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

// Scroll to Top
scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================================
// Reveal Animation
// ==========================================

const revealElements = document.querySelectorAll(
    ".about, .skills, .education, .projects, .contact"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ==========================================
// Contact Form Validation
// ==========================================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach((input) => {

            if (input.value.trim() === "") {

                valid = false;

                input.style.border = "2px solid red";

            } else {

                input.style.border = "1px solid #ddd";

            }

        });

        if (valid) {

            alert("Message Sent Successfully!");

            form.reset();

        } else {

            alert("Please fill all fields.");

        }

    });

}

    });

});

// ==========================================
// Dark / Light Theme
// ==========================================

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){

        themeBtn.innerHTML = "☀️";

    }else{

        themeBtn.innerHTML = "🌙";

    }

});
