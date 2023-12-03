document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('backgroundMusic');
    const soundImage = document.getElementById('soundImage');

    // Добавляем обработчик события click к изображению
    soundImage.addEventListener('click', function() {
        // Воспроизводить музыку
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    // Добавляем обработчик события click к ссылкам с классом 'scroll-link'
    document.querySelectorAll('.scroll-link').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});
