let mobileMenu = document.querySelector('.mobile-menu');
let closeBtn = document.querySelector('.close-btn');
let nav = document.querySelector('nav');

mobileMenu.addEventListener('click', function() {
  nav.classList.add('nav-open-nav');
  document.body.classList.add('nav-open-body');

})

closeBtn.addEventListener('click', function() {
  nav.classList.remove('nav-open-nav');
  document.body.classList.remove('nav-open-body');
})

