/* 
var pages = {
    'home' :`Bem vindos! <br/><br/>`,
    'aboutus' : `Conheça a professora <br/><br/>`,
    'services' : `Aqui você encontra:  <br/><br/>`,
    'contact' : `Vamos conversar'  <br/><br/>`,
};

function getPageContent(page){
    var contentToReturn;
    switch(page){
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
} */
