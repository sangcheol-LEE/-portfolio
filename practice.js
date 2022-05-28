'use strict';

const navBar = document.querySelector('#navbar');
const navBarHeight = navBar.getBoundingClientRect().height;
const aboutBtn = document.querySelectorAll('.navbar__menu__item')[1];

//스크롤 시 nav가 home화면보다 많이 내려갔을 경우 nav에 에니메이션 효과
document.addEventListener('scroll', () => {
const windowY = window.scrollY // 화면 스크롤 값

  if(windowY > navBarHeight) {
    navBar.classList.add('navbar--dark')
  } else {
    navBar.classList.remove('navbar--dark')
  }

})

aboutBtn.addEventListener('click', goToTop)

function goToTop() {
  let topY = document.querySelector('#about').offsetTop - navBarHeight;
  window.scrollTo({top:topY, behavior:"smooth"})
}

// contact me 

const contactMe = document.querySelector('.home__contact');

contactMe.addEventListener('click', () => {
  const contactHeight = document.querySelector('#contact').offsetTop;
  window.scrollTo({top:contactHeight, behavior: 'smooth'});
})

// 홈 배경색이 스크롤링 할수록 점점 투명해지는 기능 

const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  const bgOpacity = window.scrollY / homeHeight
  home.style.opacity = 1 - bgOpacity;
})