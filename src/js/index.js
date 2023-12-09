import "../css/style.scss";

//Mobile menu button
const navToggle = document.querySelector(".nav__trigger");
const menu = document.querySelector(".nav__wrapper");

navToggle.onclick = () => {
  navToggle.classList.toggle("nav__trigger--active");
  menu.classList.toggle("nav__wrapper--active");
};
//-----------------------

//underline active link based on URL path
const activeNavlink = document.querySelectorAll(
  'nav a[href^="/' + location.pathname.split("/")[1] + '"]'
);

activeNavlink[0].classList.add("active");
//-----------------------

const copyright = document.querySelector("#copyright");
copyright.insertAdjacentText("beforeend", ` ${new Date().getFullYear()}`);
