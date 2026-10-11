"use strict";

// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
  const isOpen = navMenu.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// CLOSE MENU AFTER CLICKING A LINK
document.querySelectorAll("#navMenu a").forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// AUTOMATIC COPYRIGHT YEAR
document.getElementById("year").textContent =
  new Date().getFullYear();

// CONTACT FORM
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const formData = new FormData(contactForm);

  const name = formData.get("name");
  const email = formData.get("email");
  const service = formData.get("service");
  const message = formData.get("message");

  const whatsappMessage =
    "Hello, I would like to make an enquiry.\n\n" +
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Service: " + service + "\n\n" +
    "Project details:\n" + message;

  formStatus.textContent =
    "Opening WhatsApp with your message. Review it there and press Send.";
  window.location.href =
    "https://wa.me/2348165580166?text=" +
    encodeURIComponent(whatsappMessage);
});