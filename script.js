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

    });

});
