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

// const headerSection = document.querySelector('.header-section');

// console.log(headerSection.style);
const bottomLinks = document.getElementById('bottom-links');
const headerSection = document.querySelector('.header-section');
const mainContentContainer = document.getElementById('main-content-container');

document.addEventListener('DOMContentLoaded', () => {
    let image = document.querySelector('.header-section').style.backgroundImage;
    
    if(image) {
        image.addEventListener('load', () => {
            document.getElementById('main-content').classList.remove('hidden');

        })
    } else {
        image = 'url(/assets/ivan-aleksic-PDRFeeDniCk-unsplash.jpg)';
        document.getElementById('main-content').classList.remove('hidden');
    }
})

const stickyHeader = () => {
    const header = document.getElementById('sticky-header');
    const sticky = headerSection.getBoundingClientRect().top + window.pageYOffset;
    const harmburgerNav = document.querySelector('.hamburgerNav');

    const options = {
        root : null,
        rootMargin: '0px',
        rootPadding: '0px',
        threshold: 0.5
    }

    

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                header.classList.remove('header-visible');
                header.classList.add( 'hidden');
                harmburgerNav.classList.add('hidden');
            } else {
                header.classList.add('header-visible');
                header.classList.remove('hidden');
                header.classList.add('max-h-[500px]', 'mt-4');
                harmburgerNav.classList.remove('hidden');
            }

        });
    }, options);

    observer.observe(headerSection);

    console.log(sticky);

    // window.onscroll = () => {
    //     if (window.pageYOffset > sticky) {
    //         header.classList.remove('hidden')
    //     } else if (window.pageYOffset < sticky) {
    //         header.classList.add('hidden');
    //     }
    // };
}

stickyHeader()

const observerTwo = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                bottomLinks.classList.add('opacity-0');
                mainContentContainer.classList.remove('opacity-100');
                mainContentContainer.classList.add('opacity-0');
                // bottomLinks.classList.remove('md:flex');
            } else {
                bottomLinks.classList.remove('opacity-0');
                bottomLinks.classList.add('bottom-links');
                mainContentContainer.classList.remove('opacity-0');
                mainContentContainer.classList.add('opacity-100');
                observerTwo.unobserve(headerSection);
            }
        })
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.7
    })

    observerTwo.observe(headerSection)
    


// document.addEventListener('scroll', (e) => {
//     const scrollPosition = window.scrollY + window.innerHeight;
//     const bottomLinksPosition = bottomLinks.getBoundingClientRect().top + window.pageYOffset;

//     if (scrollPosition >= bottomLinksPosition) {
//         bottomLinks.classList.add('hidden');
//     } else {
//         bottomLinks.classList.remove('hidden');
//     }
// })