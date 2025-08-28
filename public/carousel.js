document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn-left');
    const nextBtn = document.querySelector('.carousel-btn-right');
    const title = document.querySelector('#carousel-title');
    let currentIndex = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        title.textContent = currentIndex === 0 ? 'Discover Your Inner Universe' : 'On the Horizon';
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + 1, slides.length - 1);
        updateCarousel();
    });

    // Initialize carousel position
    updateCarousel();
});