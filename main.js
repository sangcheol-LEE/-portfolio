'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

//스크롤 시 nav가 home화면보다 많이 내려갔을 경우 nav에 에니메이션 효과

document.addEventListener("scroll", () => {
  console.log("scrollY",window.scrollY)
  console.log(`height: ${navbarHeight}`)

  if(window.scrollY > navbarHeight){ //scrolling이 navbarHeight 이상으로 동작하면 
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark')
  }
});

