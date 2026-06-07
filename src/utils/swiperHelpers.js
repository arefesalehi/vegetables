/**
 * Swiper loop needs enough slides; otherwise it throws (getAttribute) and breaks the page.
 * CSS/layout unchanged — only disables loop when unsafe.
 */
export function canSwiperLoop(slideCount, minSlides = 3) {
  return slideCount >= minSlides
}
