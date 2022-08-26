document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('show')
})

ScrollReveal().reveal('.container');
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.subtitle', {delay: 500});
ScrollReveal().reveal('.card-survey', {delay: 500});
ScrollReveal().reveal('.foot', {delay: 500});