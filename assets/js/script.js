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

// uper button
// Get the button
const mybutton = document.getElementById("upper");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

mybutton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
