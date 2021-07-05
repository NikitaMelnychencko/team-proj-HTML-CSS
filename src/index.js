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