import "./styles/styles.scss";
import "./icons/svgxuse.js";

const trigger = document.querySelector(".nav__trigger");
const nav = document.querySelector(".nav");
const wrapper = document.querySelector(".nav__wrapper");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    nav.classList.add("nav--sticky");
    trigger.classList.add("nav__trigger--sticky");
  } else {
    nav.classList.remove("nav--sticky");
    trigger.classList.remove("nav__trigger--sticky");
  }
}

const responsiveNav = () => {
  trigger.classList.toggle("nav__trigger--active");
  wrapper.classList.toggle("nav__wrapper--active");
};

trigger.addEventListener("click", responsiveNav);
