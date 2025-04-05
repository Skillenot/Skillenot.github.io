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

document.addEventListener('DOMContentLoaded', function() {
    const audioControl = document.getElementById('audio-control');
    const backgroundAudio = document.getElementById('background-audio');
    
    // Configurar el volumen inicial (50%)
    backgroundAudio.volume = 0.5;

    // Intentar reproducción automática
    const playAudio = () => {
        const promise = backgroundAudio.play();
        
        if (promise !== undefined) {
            promise.then(() => {
                // Reproducción exitosa
                audioControl.classList.add('playing');
                audioControl.querySelector('.audio-tooltip').textContent = 'Pause';
            })
            .catch(error => {
                // Falló el autoplay, mostrar botón para activar manualmente
                audioControl.classList.add('error');
                audioControl.querySelector('.audio-tooltip').textContent = 'Click';
                console.log("Autoplay bloqueado:", error);
            });
        }
    };

    // Controlador de eventos para el botón de audio
    audioControl.addEventListener('click', function() {
        if (backgroundAudio.paused) {
            backgroundAudio.play()
                .then(() => {
                    audioControl.classList.remove('error');
                    audioControl.classList.add('playing');
                    audioControl.querySelector('.audio-tooltip').textContent = 'Playing';
                });
        } else {
            backgroundAudio.pause();
            audioControl.classList.remove('playing');
            audioControl.querySelector('.audio-tooltip').textContent = 'Paused';
        }
    });

    // Intentar reproducir al cargar (puede ser bloqueado por el navegador)
    playAudio();

    // Opcional: Intentar de nuevo cuando el usuario interactúa con la página
    document.body.addEventListener('click', function firstInteraction() {
        playAudio();
        document.body.removeEventListener('click', firstInteraction);
    }, { once: true });
});
document.addEventListener('DOMContentLoaded', function() {
    // Solo necesitamos asegurarnos que los datos sean consistentes
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.calendar-day:not(.empty-day)').forEach(day => {
            // Verificar que el atributo data-weekday exista
            if (!day.hasAttribute('data-weekday')) {
                console.warn('Elemento sin data-weekday:', day);
            }
        });
    }
});
