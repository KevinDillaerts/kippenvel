import emailjs from "emailjs-com";

const form = document.getElementById("contact-form");

const user_id = process.env.USER_ID;
const template_id = process.env.TEMPLATE_ID;

emailjs.init(user_id);

window.onload = function () {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const button = document.getElementById("button");
    const serviceID = "default_service";

    button.innerText = "Versturen...";
    button.disabled = true;

    emailjs.sendForm(serviceID, template_id, this).then(
      function () {
        form.innerHTML = `<p>Bedankt voor jouw bericht, we antwoorden zo spoedig mogelijk</p>`;
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });
};
