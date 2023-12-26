window.onload = () => {
  const menu_btn = document.querySelector('.humburger');
  const moblile_menu = document.querySelector('.mob-navbar');
  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    moblile_menu.classList.toggle('is-active');
  })
}

const list = document.querySelectorAll('.list');

function activelink() {
  list.forEach((item) => 
  item.classList.remove('active'));
  this.classList.add('active');
}

list.forEach((item) =>
item.addEventListener('click', activelink))


document.addEventListener('scroll', () => {
  const header = document.querySelector('header')
  if (window.scrollY > 0) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})

var swiper = new Swiper(".contentt", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  breakpoints: {
    0: {
      slidesPerView: 5.10,
    },
    390: {
      slidesPerView: 5.135,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});