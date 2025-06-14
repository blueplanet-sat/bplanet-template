import { getNextIndex, getPrevIndex } from './carousel';

export function initCarousel() {
  let currentIndex = 0;
  const carousel = document.getElementById('carousel');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const totalSlides = document.querySelectorAll('#carousel > div').length;

  if (!carousel || !next || !prev) return;

  function updateCarousel() {
    carousel!.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  next.addEventListener('click', () => {
    console.log("Aca");
    currentIndex = getNextIndex(currentIndex, totalSlides);
    updateCarousel();
  });

  prev.addEventListener('click', () => {
    currentIndex = getPrevIndex(currentIndex, totalSlides);
    updateCarousel();
  });
}
