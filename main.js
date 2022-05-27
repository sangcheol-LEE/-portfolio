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

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: 'smooth'});
})

// contact btn 클릭 시 contact 창

const homeContact = document.querySelector('.home__contact');

homeContact.addEventListener('click', () => {
  const scrollTo = document.querySelector('#contact');
  scrollTo.scrollIntoView({behavior: 'smooth'});
})




