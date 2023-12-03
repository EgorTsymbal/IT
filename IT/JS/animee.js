document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('backgroundMusic');
    const soundImage = document.getElementById('soundImage');
    const thirdTitle = document.querySelector('.third__title');
    const overlay = document.querySelector('.overlay');

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

    // Показываем оверлей при наведении на .third__title
    thirdTitle.addEventListener('mouseover', function () {
        overlay.style.display = 'flex';
    });

    // Скрываем оверлей, если курсор не находится ни над .third__title, ни над оверлеем
    document.addEventListener('mouseout', function (event) {
        if (!thirdTitle.contains(event.relatedTarget) && !overlay.contains(event.relatedTarget)) {
            overlay.style.display = 'none';
        }
    });
});
