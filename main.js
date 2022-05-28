'use strict';

const navBar = document.querySelector('#navbar');
const navBarHeight = navBar.getBoundingClientRect().height;

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

// 버튼 클릭시 지정된 위치로 가게 하는 기능

const navBarMenu = document.querySelector('.navbar__menu');

navBarMenu.addEventListener('click', (ev) => {
  const target = ev.target;
  const link = target.dataset.link;

  if(link == null) {
    return;
  }

  scrollIntoView(link)
  
})

// contact btn 클릭 시 contact 창  

const homeContact = document.querySelector('.home__contact');
homeContact.addEventListener('click', () => {
  scrollIntoView('#contact')
})


// 스크롤링 할 때 home section 백 그라운드 opacity값 변경하기

const homeContents = document.querySelector('.home__container');
const homeHeight = homeContents.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  // opacity 1은 불투명 , 0은 투명
  const windowHeight = window.scrollY;
  const opacity = 1 - windowHeight / homeHeight; // 1 - "(윈도우 높이 / homeSection 높이)"
  homeContents.style.opacity = opacity;
})

// 스크롤링이 되면 버튼이 나오고 버튼 클릭시 제일 상위로 올라가는 버튼 기능
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll',() => {
  if(window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});







function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}

