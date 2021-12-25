import "../css/style.scss";

const navToggle = document.querySelector(".nav__trigger");
const menu = document.querySelector(".nav__wrapper");

navToggle.onclick = () => {
  navToggle.classList.toggle("nav__trigger--active");
  menu.classList.toggle("nav__wrapper--active");
};

/* 
To do's:
- add underline active link functionality
- add favicons
*/
