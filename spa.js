var pages = {
    'home' : `Bem vindos! <br/><br/>`,
    'aboutus' : `Conheça a professora <br/><br/>`,
    'services' : `Aqui você encontra:  <br/><br/>`,
    'contact' : `Entre em Contato <br/><br/>
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
    switch(page) {
      case 'home':
        contentToReturn = pages.home;
        break;
      case 'aboutus':
        contentToReturn = pages.aboutus;
        break;
      case 'services':
        contentToReturn = pages.services;
        break;
      case 'contact':
        contentToReturn = pages.contact;
        break;
      default:
        contentToReturn = pages.home;
        break;
    }
    document.getElementById('content').innerHTML = contentToReturn; 
  }