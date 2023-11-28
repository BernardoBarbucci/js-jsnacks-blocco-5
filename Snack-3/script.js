// Un oggetto rappresenta una finestra di un browser e contiene due campi:
//  un array di tab aperte e un numero che indica l'indice della tab aperta nell'array:
// {
//     "tab": ["Facebook", "GitHub", "Gmail"],
//     "activeTab": 0
// }
// Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
// Nel caso la tab fosse attiva, deve attivare la successiva.

const browserElement = {
    "tab": ["Facebook", "GitHub", "Gmail", "Instagram", "Twitter", "Gmail", "Tiktok"],
    "activeTab": 0
};

const blackList = ['facebook', 'instagram', 'tiktok'];

browserElement.tab = browserElement.tab.filter((social) => {
    if ( !blackList.includes(social.toLowerCase())){
        return true;
    }
}) ; 

console.log(browserElement);




// function closeElement(social){
//     const socialIndex = browserElement.tab.indexOf(social);


// }
