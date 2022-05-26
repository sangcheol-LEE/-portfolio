'use strict';

const navBar = document.querySelector('#navbar');
const navBarHeight = navBar.getBoundingClientRect().height;
const aboutBtn = document.querySelectorAll('.navbar__menu__item')[1];

//스크롤 시 nav가 home화면보다 많이 내려갔을 경우 nav에 에니메이션 효과
document.addEventListener('scroll', () => {
  const windowY = window.scrollY // 화면 스크롤 값

  console.log('windowY',windowY)
  console.log('navBarHeight',navBarHeight)

  if(windowY > navBarHeight) {
    navBar.classList.add('navbar--dark')
  } else {
    navBar.classList.remove('navbar--dark')
  }
})

console.log("aboutBtn",aboutBtn)
aboutBtn.addEventListener('click', goToTop)

function goToTop() {
  let topY = document.querySelector('#about').offsetTop - navBarHeight;
  window.scrollTo({top:topY, behavior:"smooth"})
}







