const links = document.getElementsByTagName('a');
const h1 = document.querySelector('.search h1');
const header = document.querySelector('header');
const open = document.querySelector('#open');
const close = document.querySelector('#close');
const span = document.querySelectorAll('header span');
let clicked = false;

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', e => {
    e.preventDefault();
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }
    const index = i;
    links[index].classList.add('active');
    switch (index) {
      case 0:
        h1.innerHTML = 'Каталог';
      break;
      case 1:
        h1.innerHTML = 'Здоровье';
      break;
      case 2:
        h1.innerHTML = 'Красота';
      break;
      case 3:
        h1.innerHTML = 'Развлечения';
      break;
      case 4:
        h1.innerHTML = 'Авто';
      break;
    
      default:
        
    }
  })
}
open.onclick = () => {
  clicked = true;
  header.classList.add('clicked');
  
    setTimeout(() => {
      for (let i = 0; i < span.length; i++) {
        span[i].style.display = 'inline';
      }
    }, 80);
};
close.onclick = () => {
  clicked = false;
      for (let i = 0; i < span.length; i++) {
        span[i].style.display = 'none';
      }
  header.classList.remove('clicked');
}

window.onscroll = function() {scrolled()};
function scrolled() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".main").classList.add("scrolled");
  } else {
    document.querySelector(".main").classList.remove("scrolled");
  }
}

window.onresize = (e) => {
    for (let i = 0; i < span.length; i++) {
      if (window.innerWidth < 1024) {
        if (!clicked) {
          span[i].style.display = 'none';
        }
      } else {
        span[i].style.display = 'inline';
      }
    }
}