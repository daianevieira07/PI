var pages = {
  home: `<div class="iframe-container">
        <iframe loading="lazy" src="https://www.canva.com/design/DAGB3eKYNa0/DCsnBxwSl6bx7EVpunixqw/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
        </iframe>
      </div>`,
  aboutus: `<div class="iframe-container">
     <iframe loading="lazy" src="https://www.canva.com/design/DAGFNEQHupQ/0QzbpsDiA9_36Tz37YhFTQ/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
     </iframe>
   </div>`,
  services: `<div class="iframe-container">
     <iframe loading="lazy" src="https://www.canva.com/design/DAGFOY9xjGs/G2S9FR0MV1NssSP3yomniw/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
     </iframe>
   </div>`,
  contact: `<div class="background">
   <form class="form" id="contactForm">
      <label for="name">Nome:</label>
      <input type="text" id="name" class="inputUser" placeholder="Nome " required>
      <label for="telefone">Telefone: </label>
      <input type="tel" id="telefone" placeholder="Telefone" required>
      <label for="email">E-mail:</label>
      <input type="email" id="email" placeholder="Email" required>
      <label for="message">Mensagem:</label>
      <textarea id="message" name="message" placeholder="Deixe aqui sua mensagem" required></textarea><br>
     <input type="submit" id="submitButton" value="Enviar">
   </form>
   <div id="confirmationMessage" class="confirmation" style="display: none;"> Legal! </br> </br> Seu contato foi enviado,</br> responderemos em breve.</div>
</div>`,
};

function getPageContent(page) {
  var contentToReturn;
  switch (page) {
    case "home":
      contentToReturn = pages.home;
      break;
    case "aboutus":
      contentToReturn = pages.aboutus;
      break;
    case "services":
      contentToReturn = pages.services;
      break;
    case "contact":
      contentToReturn = pages.contact;
      break;
    default:
      contentToReturn = pages.home;
      break;
  }
  document.getElementById("content").innerHTML = contentToReturn;
  if (page === "contact") {
    addSubmitEvent();
  }
}

function addSubmitEvent() {
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var confirmationMessage = document.getElementById("confirmationMessage");
      confirmationMessage.style.display = "block";
      form.style.display = "none"; // Oculta todos os campos do formulário
      setTimeout(function () {
        getPageContent("home");
      }, 150000);
    });
  }
}
