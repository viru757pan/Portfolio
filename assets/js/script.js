// Navigation functionality
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => page.classList.remove("active"));

  // Show selected page
  document.getElementById(pageId).classList.add("active");

  // Update navigation
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => link.classList.remove("active"));
  event.target.classList.add("active");
}

// Contact form handling
function handleSubmit(event) {
  event.preventDefault();
  alert("Thank you for your message! I'll get back to you soon.");
  event.target.reset();
}

// Smooth scrolling and animations
document.addEventListener("DOMContentLoaded", function () {
  // Add entrance animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  // Observe project cards for animation
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });
});

// navbar script

const bar = document.getElementById("bar");
const cross = document.getElementById("cross");
const nav = document.getElementById("nav");
const navItems = document.querySelectorAll("#nav .nav-links li");

bar.addEventListener("click", function () {
  nav.classList.add("show");
  this.classList.remove("active");
  cross.classList.add("active");
});

cross.addEventListener("click", function () {
  nav.classList.remove("show");
  this.classList.remove("active");
  bar.classList.add("active");
});

// Close menu when any nav item is clicked
navItems.forEach((li) => {
  li.addEventListener("click", () => {
    nav.classList.remove("show");
    cross.classList.remove("active");
    bar.classList.add("active");
  });
});
