/* global AOS */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {

    // AOS Init
    AOS.init({
        duration: 1000,
        once: true
    });

    // Hamburger Menu Toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMain = document.getElementById('nav-main');

    hamburgerBtn.addEventListener('click', () => {
        const isOpen = navMain.classList.toggle('nav-open');
        hamburgerBtn.classList.toggle('active', isOpen);
        hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking a nav link
    navMain.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMain.classList.remove('nav-open');
            hamburgerBtn.classList.remove('active');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // Form Feedback
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Hide the form and show feedback
        contactForm.style.display = 'none';
        formFeedback.hidden = false;

        // Reset form for future use
        contactForm.reset();
    });

});
