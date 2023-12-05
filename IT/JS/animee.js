document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('backgroundMusic');
    const soundImage = document.getElementById('soundImage');
    const animeText = document.querySelector('.anime_text');

    let hideOverlayTimeout;

    soundImage.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    document.querySelectorAll('.scroll-link').forEach(function (link) {
        link.addEventListener('click', function (event) {
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

    document.querySelector('.icon').addEventListener('click', function () {
        animeText.classList.toggle('active');
    });

    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Обновляем страницу
        window.location.reload();
    });
    
});
