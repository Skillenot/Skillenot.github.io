
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
    
 
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});

document.addEventListener('DOMContentLoaded', function() {
    const audioControl = document.getElementById('audio-control');
    const backgroundAudio = document.getElementById('background-audio');
    
  
    backgroundAudio.volume = 0.5;


    const playAudio = () => {
        const promise = backgroundAudio.play();
        
        if (promise !== undefined) {
            promise.then(() => {
               
                audioControl.classList.add('playing');
                audioControl.querySelector('.audio-tooltip').textContent = 'Pause';
            })
            .catch(error => {
             
                audioControl.classList.add('error');
                audioControl.querySelector('.audio-tooltip').textContent = 'Click me';
                console.log("Autoplay bloqueado:", error);
            });
        }
    };


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
    playAudio();


});
document.addEventListener('DOMContentLoaded', function() {

    if (window.innerWidth <= 768) {
        document.querySelectorAll('.calendar-day:not(.empty-day)').forEach(day => {
         
            if (!day.hasAttribute('data-weekday')) {
                console.warn('Elemento sin data-weekday:', day);
            }
        });
    }
});
