// script.js

// ===============================
// Mobile navigation
// ===============================
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// ===============================
// Scroll reveal animations
// ===============================
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -60px 0px",
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

// ===============================
// Sticky navbar shadow on scroll
// ===============================
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ===============================
// Active navigation link
// ===============================
const sections = document.querySelectorAll("main section[id]");

const activeSectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const activeLink = document.querySelector(`.nav-menu a[href="#${id}"]`);

      if (entry.isIntersecting && activeLink) {
        navLinks.forEach((link) => link.classList.remove("active"));
        activeLink.classList.add("active");
      }
    });
  },
  {
    threshold: 0.35,
  }
);

sections.forEach((section) => {
  activeSectionObserver.observe(section);
});

// ===============================
// Image loading enhancement
// ===============================
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

lazyImages.forEach((img) => {
  img.addEventListener("load", () => {
    img.classList.add("loaded");
  });
});

// ===============================
// Keyboard accessibility
// ===============================
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
  }
});