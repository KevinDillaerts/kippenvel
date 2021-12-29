import baguetteBox from "baguettebox.js";

const allImages = [...document.querySelectorAll("img")].map((image) => image.src);
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

const preLoadImage = (url) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = resolve;
    img.onerror = reject;
  });

const preLoadImages = (arr) => Promise.all(arr.map(preLoadImage));

const render = async () => {
  await preLoadImages(allImages);
  loader.style.display = "none";
  gallery.style.display = "flex";
  baguetteBox.run(".gallery");
};

render();

// const makeLinks = () => {
//   let htmlstring = "";

//   for (i = 1; i <= 28; i++) {
//     const s = String(i);
//     htmlstring += `
//     <a href="../images/producties/bakkertje_pol/bakkertje_pol_${s.padStart(3, "0")}.jpg">
//     <img
//       class="gallery__thumbnail"
//       src="../images/producties/bakkertje_pol/thumbnails/bakkertje_pol_thumb_${s.padStart(
//         3,
//         "0"
//       )}.jpg"
//       alt="Foto uit Bakkertje Pol"
//     />
//   </a>
// `;
//   }
//   console.log(htmlstring);
// };
// makeLinks();
