import baguetteBox from "baguettebox.js";

window.addEventListener("load", function () {
  baguetteBox.run(".gallery");
});

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
