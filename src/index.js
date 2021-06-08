import "./styles/styles.scss";
import "./icons/svgxuse.js";

const trigger = document.querySelector(".nav__trigger");
//const nav = document.querySelector(".nav");
const wrapper = document.querySelector(".nav__wrapper");
// let options = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 1.0,
// };

// const topContainerObserver = new IntersectionObserver(function (entries) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       nav.classList.remove("nav--sticky");
//       trigger.classList.remove("nav__trigger--sticky");
//     } else {
//       nav.classList.add("nav--sticky");
//       trigger.classList.add("nav__trigger--sticky");
//     }
//   });
// }, options);

// topContainerObserver.observe(nav);

const responsiveNav = () => {
  trigger.classList.toggle("nav__trigger--active");
  wrapper.classList.toggle("nav__wrapper--active");
};

trigger.addEventListener("click", responsiveNav);
