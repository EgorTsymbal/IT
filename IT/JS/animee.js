const sliderImages = ['2.jpg', '3.jpg', '4.jpg'];

const sliderContainer = document.querySelector('.slider-container');

sliderImages.forEach((imageName, index) => {
    const imgElement = document.createElement('img');
    imgElement.src = `../IMG/${imageName}`;
    imgElement.alt = `Изображение слайдера ${index + 1}`;
    sliderContainer.appendChild(imgElement);
});
