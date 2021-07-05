import './sass/main.scss';

(() => {

const menuBtnRef = document.querySelector("[data-menu-button]");
const mobileMenuRef = document.querySelector("[data-menu]");
const mobileBtnOne = document.querySelector("[data-menu-one]");
const mobileBtnTwo = document.querySelector("[data-menu-two]");
const mobileBtnTree = document.querySelector("[data-menu-tree]"); 
const mobileBtnFour = document.querySelector("[data-menu-four]");


menuBtnRef.addEventListener("click", () => {
  const expanded =
    menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
  menuBtnRef.classList.toggle("menu-button--is-open");
  menuBtnRef.setAttribute("aria-expanded", !expanded);
  document.body.classList.toggle("modal-open");

  mobileMenuRef.classList.toggle("menu-container-mobile--is-open");
    
});

mobileBtnOne.addEventListener("click", () => {
  const expanded =
  menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
  menuBtnRef.classList.toggle("menu-button--is-open");
  menuBtnRef.setAttribute("aria-expanded", !expanded);
  
  document.body.classList.toggle("modal-open");
  
  mobileMenuRef.classList.toggle("menu-container-mobile--is-open");
});
mobileBtnTwo.addEventListener("click", () => {
  const expanded =
  menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
  menuBtnRef.classList.toggle("menu-button--is-open");
  menuBtnRef.setAttribute("aria-expanded", !expanded);
  
  document.body.classList.toggle("modal-open");
  
  mobileMenuRef.classList.toggle("menu-container-mobile--is-open");
});
mobileBtnTree.addEventListener("click", () => {
  const expanded =
  menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
  menuBtnRef.classList.toggle("menu-button--is-open");
  menuBtnRef.setAttribute("aria-expanded", !expanded);
  
  document.body.classList.toggle("modal-open");
  
  mobileMenuRef.classList.toggle("menu-container-mobile--is-open");
});
mobileBtnFour.addEventListener("click", () => {
  const expanded =
  menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
  menuBtnRef.classList.toggle("menu-button--is-open");
  menuBtnRef.setAttribute("aria-expanded", !expanded);
  
  document.body.classList.toggle("modal-open");
  
  mobileMenuRef.classList.toggle("menu-container-mobile--is-open");
});
})();

 // Scroll to anchors site-nav
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.site-nav').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.site-nav__link--js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());


 // Scroll to anchors site-nav-mobile
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.site-nav-mobile').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.site-nav-mobile__link--js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());