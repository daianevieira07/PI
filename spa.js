/* var pages = {
  home: `<div style="position: relative; width: 100%; height: -5; padding-top: 56.2225%;
        padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
        border-radius: 8px; will-change: transform;">
        <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
          src="https://www.canva.com/design/DAGB3eKYNa0/DCsnBxwSl6bx7EVpunixqw/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
        </iframe>
      </div>`,
  aboutus: `<div style="position: relative; width: 100%; height: 0; padding-top: 56.2225%;
    padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
    border-radius: 8px; will-change: transform;">
     <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
       src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGFNEQHupQ&#x2F;0QzbpsDiA9_36Tz37YhFTQ&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
     </iframe>
   </div>`,
  services: `<div style="position: relative; width: 100%; height: 0; padding-top: 56.2225%;
    padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
    border-radius: 8px; will-change: transform;">
     <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
       src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGFOY9xjGs&#x2F;G2S9FR0MV1NssSP3yomniw&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
     </iframe>
   </div>`,
  contact: `Entre em Contato <br/><br/>
   <form class="form">
     <label for="name">Nome:</label><br>
     <input type="text" class="inputUser" placeholder="Nome " required> </br>
     <label for="telefone">Telefone </label><br>
     <input type="telefone" id="telefone" placeholder="Telefone" required></br>
     <label for="email">E-mail:</label><br>
     <input type="email" id="email" placeholder="Email" required></br>
     <label for="message">Mensagem:</label><br>
     <textarea id="message" name="message" placeholder="Deixe aqui sua mensagem" required></textarea><br><br>
     <input type="submit" value="Enviar">
   </form>`,
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
}
 */

/* var pages = {
  home: `<div style="position: relative; width: 100%; height: -5; padding-top: 56.2225%;
        padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
        border-radius: 8px; will-change: transform;">
        <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
          src="https://www.canva.com/design/DAGB3eKYNa0/DCsnBxwSl6bx7EVpunixqw/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
        </iframe>
      </div>`,
  aboutus: `<div style="position: relative; width: 100%; height: 0; padding-top: 56.2225%;
    padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
    border-radius: 8px; will-change: transform;">
     <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
       src="https://www.canva.com/design/DAGFNEQHupQ/0QzbpsDiA9_36Tz37YhFTQ/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
     </iframe>
   </div>`,
  services: `<div style="position: relative; width: 100%; height: 0; padding-top: 56.2225%;
    padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
    border-radius: 8px; will-change: transform;">
     <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
       src="https://www.canva.com/design/DAGFOY9xjGs/G2S9FR0MV1NssSP3yomniw/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
     </iframe>
   </div>`,
  contact: `<div class="background">
   <form class="form">
     <label for="name">Nome:</label><br>
     <input type="text" class="inputUser" placeholder="Nome " required> </br>
     <label for="telefone">Telefone </label><br>
     <input type="telefone" id="telefone" placeholder="Telefone" required></br>
     <label for="email">E-mail:</label><br>
     <input type="email" id="email" placeholder="Email" required></br>
     <label for="message">Mensagem:</label><br>
     <textarea id="message" name="message" placeholder="Deixe aqui sua mensagem" required></textarea><br><br>
     <input type="submit" value="Enviar">
   </form>
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
}
 */

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
   <form class="form">
     <label for="name">Nome:</label><br>
     <input type="text" class="inputUser" placeholder="Nome " required> </br>
     <label for="telefone">Telefone </label><br>
     <input type="telefone" id="telefone" placeholder="Telefone" required></br>
     <label for="email">E-mail:</label><br>
     <input type="email" id="email" placeholder="Email" required></br>
     <label for="message">Mensagem:</label><br>
     <textarea id="message" name="message" placeholder="Deixe aqui sua mensagem" required></textarea><br><br>
     <input type="submit" value="Enviar">
   </form>
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
}
