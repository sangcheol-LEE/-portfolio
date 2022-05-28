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

// 스크롤 시 윈도우 높이가 0보다 커지면 에로우 버튼이 나타나서 가장 위로 올라가는 기능

const arrowBtn = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if(scrollY > 0) {
    arrowBtn.style.display = "block"
  }else {
    arrowBtn.style.display = "none"
  }

})

arrowBtn.addEventListener('click', () => {
  const scrollY = window.scrollY;
  window.scrollTo({top:0, behavior:"smooth"})
})

// 스크롤링이 되면 버튼이 나오고 버튼 클릭시 제일 상위로 올라가는 버튼 기능
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll',() => {
  if(window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
})



