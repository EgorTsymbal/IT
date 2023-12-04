document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('backgroundMusic');
    const soundImage = document.getElementById('soundImage');
    const thirdTitle = document.querySelector('.third__title');
    const overlay = document.querySelector('.overlay');
    const overlayVideo = document.getElementById('overlayVideo');
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

    thirdTitle.addEventListener('mouseenter', function () {
        overlay.style.display = 'flex';
        overlayVideo.play();
    });
    
    thirdTitle.addEventListener('mouseleave', function () {
        hideOverlayTimeout = setTimeout(function () {
            overlay.style.display = 'none';
            overlayVideo.pause();
        }, 3000);
    });
    

    thirdTitle.addEventListener('mousemove', function () {
        clearTimeout(hideOverlayTimeout);
    });

    document.addEventListener('mouseleave', function (event) {
        const cursorArea = 1000;

        const isCursorInTitle = (
            event.clientX >= thirdTitle.offsetLeft - cursorArea &&
            event.clientX <= thirdTitle.offsetLeft + thirdTitle.offsetWidth + cursorArea &&
            event.clientY >= thirdTitle.offsetTop - cursorArea &&
            event.clientY <= thirdTitle.offsetTop + thirdTitle.offsetHeight + cursorArea
        );

        if (!isCursorInTitle && !overlay.contains(event.relatedTarget)) {
            overlay.style.display = 'none';
            overlayVideo.pause();
        }
    });

    document.querySelector('.icon').addEventListener('click', function () {
        animeText.classList.toggle('active');
    });
});