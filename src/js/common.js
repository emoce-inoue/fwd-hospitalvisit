// ハンバーガーメニューの制御
const toggleMenu = () => {
  const hamburger = document.querySelector('.l-header__hamburger');
  const nav = document.querySelector('.l-nav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('l-nav--opened');
  });
};

// フロート表示の制御
const toggleFloat = () => {
  // スマホの時だけ実行
  if (window.matchMedia('(max-width: 767px)').matches) {
    const float = document.querySelector('.l-sticky-float');
    const hero = document.querySelector('.l-hero');
    const headerHeight = document.querySelector('.l-header').offsetHeight;

    if (hero.getBoundingClientRect().bottom <= headerHeight) {
      float.classList.add('l-sticky-float--show');
    } else {
      float.classList.remove('l-sticky-float--show');
    }
  }
};

window.addEventListener('load', () => {
  const loadElms = document.querySelectorAll('.js-load');
  loadElms.forEach((loadElm) => {
    loadElm.classList.add('js-load--loaded');
  });

  // 機能の初期化
  toggleMenu();
  toggleFloat();
});

window.addEventListener('scroll', () => {
  toggleFloat();
});
