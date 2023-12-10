// Ждем, пока весь документ загрузится, прежде чем начать выполнение скрипта
document.addEventListener('DOMContentLoaded', function () {
    // Получаем ссылку на аудио-элемент с фоновой музыкой
    const audio = document.getElementById('backgroundMusic');
    // Получаем ссылку на изображение, которое представляет звук (например, иконку динамика)
    const soundImage = document.getElementById('soundImage');
    // Получаем ссылку на элемент с классом 'anime_text', предположительно, для анимированного текста
    const animeText = document.querySelector('.anime_text');
    // Получаем ссылку на форму на странице
    const form = document.querySelector('form');
    // Получаем ссылки на выпадающие списки выбора персоны и места назначения
    const personSelect = document.getElementById('person');
    const destinationSelect = document.getElementById('destination');

    // Устанавливаем таймер для скрытия оверлея (перекрывающего элемента) после определенного времени неактивности
    let hideOverlayTimeout;

    // Добавляем обработчик события "клик" на изображение звука
    soundImage.addEventListener('click', function () {
        // Если звук выключен, включаем его, и наоборот
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    // Добавляем обработчик события "клик" для всех элементов с классом 'scroll-link'
    document.querySelectorAll('.scroll-link').forEach(function (link) {
        link.addEventListener('click', function (event) {
            // Предотвращаем стандартное поведение ссылки (переход по якорю)
            event.preventDefault();

            // Получаем идентификатор целевого элемента из атрибута href ссылки
            const targetId = this.getAttribute('href');
            // Находим соответствующий элемент на странице
            const targetElement = document.querySelector(targetId);

            // Прокручиваем страницу к найденному элементу с плавным эффектом
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Добавляем обработчик события "клик" для элемента с классом 'icon'
    document.querySelector('.icon').addEventListener('click', function () {
        // Переключаем класс 'active' для элемента с классом 'anime_text'
        animeText.classList.toggle('active');
    });

    // Добавляем обработчик события "отправка формы"
    form.addEventListener('submit', function (event) {
        // Предотвращаем стандартное поведение формы (перезагрузку страницы)
        event.preventDefault();

        // Обновляем страницу
        window.location.reload();
    });

    // Добавляем обработчик события "изменение значения" для выпадающего списка выбора персоны
    personSelect.addEventListener('change', function () {
        // Получаем выбранное количество людей в виде целого числа
        const selectedPersonCount = parseInt(personSelect.value);

        // Обновляем список вариантов туров в зависимости от количества людей
        updateTourOptions(selectedPersonCount);
    });

    // Функция для обновления списка вариантов туров в зависимости от количества людей
    function updateTourOptions(personCount) {
        // Получаем массив вариантов туров, которые нужно отобразить
        const optionsToShow = getOptionsToShow(personCount);

        // Проходим по всем вариантам туров и скрываем или показываем их на основе массива optionsToShow
        for (let i = 1; i <= 8; i++) {
            const option = destinationSelect.querySelector(`option[value="tour${i}"]`);
            option.style.display = optionsToShow.includes(i) ? 'block' : 'none';
        }
    }

    // Функция, возвращающая массив вариантов туров для заданного количества людей
    function getOptionsToShow(personCount) {
        // Возвращаем соответствующий массив вариантов в зависимости от количества людей
        switch (personCount) {
            case 1:
                return [1, 2, 3, 5, 8];
            case 2:
                return [2, 3, 6, 8];
            case 3:
                return [1, 2, 3, 4, 5, 8];
            default:
                return [];
        }
    }

    // Вызываем функцию для начальной инициализации списка туров с текущим выбранным количеством людей
    updateTourOptions(parseInt(personSelect.value));
});
