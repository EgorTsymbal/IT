document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('backgroundMusic');
    const soundImage = document.getElementById('soundImage');
    const thirdTitle = document.querySelector('.third__title');
    const overlay = document.querySelector('.overlay');
    const overlayVideo = document.getElementById('overlayVideo');
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

    thirdTitle.addEventListener('mouseover', function () {
        overlay.style.display = 'flex';
        overlayVideo.play();
    });

    thirdTitle.addEventListener('mouseout', function () {
        hideOverlayTimeout = setTimeout(function () {
            overlay.style.display = 'none';
            // Пауза видео при скрытии оверлея
            overlayVideo.pause();
        }, 300);
    });

    thirdTitle.addEventListener('mousemove', function () {
        clearTimeout(hideOverlayTimeout);
    });

    document.addEventListener('mouseout', function (event) {
        const cursorArea = 1000; // Размер зоны, где курсор мыши может находиться, чтобы оверлей не исчезал

        const isCursorInTitle = (
            event.clientX >= thirdTitle.offsetLeft - cursorArea &&
            event.clientX <= thirdTitle.offsetLeft + thirdTitle.offsetWidth + cursorArea &&
            event.clientY >= thirdTitle.offsetTop - cursorArea &&
            event.clientY <= thirdTitle.offsetTop + thirdTitle.offsetHeight + cursorArea
        );

        if (!isCursorInTitle && !overlay.contains(event.relatedTarget)) {
            overlay.style.display = 'none';
            // Пауза видео при скрытии оверлея
            overlayVideo.pause();
        }
    });
});
