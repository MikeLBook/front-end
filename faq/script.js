document.querySelectorAll('.faq-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentElement.classList.toggle('active');
    });
});