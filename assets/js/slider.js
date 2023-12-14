document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');
    const carousel = document.getElementById('carousel');

    prevButton.addEventListener('click', function () {
        moveCarousel('prev');
    });

    nextButton.addEventListener('click', function () {
        moveCarousel('next');
    });

    function moveCarousel(direction) {
        const items = carousel.querySelectorAll('.carousel div');
        const selectedItem = carousel.querySelector('.selected');
        const currentIndex = Array.from(items).indexOf(selectedItem);

        items.forEach(item => item.classList.remove('selected', 'prevLeft', 'prevLeftSecond', 'nextRight', 'nextRightSecond', 'hideLeft'));

        if (direction === 'prev') {
            const prevIndex = (currentIndex - 1 + items.length) % items.length;
            items[prevIndex].classList.add('selected');
            items[(prevIndex - 1 + items.length) % items.length].classList.add('prevLeftSecond');
            items[(prevIndex - 2 + items.length) % items.length].classList.add('prevLeft');
            items[(prevIndex + 1) % items.length].classList.add('nextRight');
            items[(prevIndex + 2) % items.length].classList.add('nextRightSecond');
            items[(prevIndex + 3) % items.length].classList.add('hideLeft');
        } else if (direction === 'next') {
            const nextIndex = (currentIndex + 1) % items.length;
            items[nextIndex].classList.add('selected');
            items[(nextIndex - 1 + items.length) % items.length].classList.add('prevLeftSecond');
            items[(nextIndex - 2 + items.length) % items.length].classList.add('prevLeft');
            items[(nextIndex + 1) % items.length].classList.add('nextRight');
            items[(nextIndex + 2) % items.length].classList.add('nextRightSecond');
            items[(nextIndex + 3) % items.length].classList.add('hideLeft');
        }
    }
});
