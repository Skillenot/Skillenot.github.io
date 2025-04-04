// script.js
document.addEventListener('DOMContentLoaded', function() {
    const messageSections = document.querySelectorAll('.message-section');
    
    function checkVisibility() {
        messageSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
    }
    
    // Verificar visibilidad al cargar y al hacer scroll
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});