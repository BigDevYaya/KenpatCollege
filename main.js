// const slides = document.querySelectorAll('.slide');
// const btnLeft = document.querySelector('.slider__btn--left');
// const btnRight = document.querySelector('.slider__btn--right');
// const dotContainer = document.querySelector('.dots');
// // const slider = function () {

// //   let curSlide = 0;
// //   const maxSlide = slides.length;

// //   // Functions
// //   const createDots = function () {
// //     slides.forEach(function (_, i) {
// //       dotContainer.insertAdjacentHTML(
// //         'beforeend',
// //         `<button class="dots__dot" data-slide="${i}"></button>`
// //       );
// //     });
// //   };

// //   const activateDot = function (slide) {
// //     document
// //       .querySelectorAll('.dots__dot')
// //       .forEach(dot => dot.classList.remove('dots__dot--active'));

// //     document
// //       .querySelector(`.dots__dot[data-slide="${slide}"]`)
// //       .classList.add('dots__dot--active');
// //   };

// //   const goToSlide = function (slide) {
// //     slides.forEach(
// //       (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
// //     );
// //   };

// //   // Next slide
// //   const nextSlide = function () {
// //     if (curSlide === maxSlide - 1) {
// //       curSlide = 0;
// //     } else {
// //       curSlide++;
// //     }

// //     goToSlide(curSlide);
// //     activateDot(curSlide);
// //   };

// //   const prevSlide = function () {
// //     if (curSlide === 0) {
// //       curSlide = maxSlide - 1;
// //     } else {
// //       curSlide--;
// //     }
// //     goToSlide(curSlide);
// //     activateDot(curSlide);
// //   };

// //   const init = function () {
// //     goToSlide(0);
// //     createDots();

// //     activateDot(0);
// //   };
// //   init();

// //   // Event handlers
// //   btnRight.addEventListener('click', nextSlide);
// //   btnLeft.addEventListener('click', prevSlide);

// //   document.addEventListener('keydown', function (e) {
// //     if (e.key === 'ArrowLeft') prevSlide();
// //     e.key === 'ArrowRight' && nextSlide();
// //   });

// //   dotContainer.addEventListener('click', function (e) {
// //     if (e.target.classList.contains('dots__dot')) {
// //       // BUG in v2: This way, we're not keeping track of the current slide when clicking on a slide
// //       // const { slide } = e.target.dataset;

// //       curSlide = Number(e.target.dataset.slide);
// //       goToSlide(curSlide);
// //       activateDot(curSlide);
// //     }
// //   });
// // };
// // slider();


// // document.querySelector('.nav_links').addEventListener('click', (e) => {
// //     e.preventDefault()
// //     if(e.target.classList.contains('nav_link')){
// //         const id = e.target.getAttribute('href')
// //         document.querySelector(id).scrollIntoView({
// //             behavior: 'smooth'
// //         })
// //     }
// // })