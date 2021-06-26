let xhr = new XMLHttpRequest();

xhr.onload = function (){
    if (this.readyState === 4 && this.status === 200) {
        Clasificaciones (this);
        }
    };

xhr.open('GET', 'http://127.0.0.1:5500/datos.xml', true);
xhr.send();

function Clasificaciones (xml){
    let Category = xml.responseXML;
    let listado = Category.getElementsByTagName('category');
    let article = document.getElementById('datosXML');
    article.innerHTML = '';

    for (let i=0; i<listado.length; i++ ){
        let tagName = document.createElement('h2');
            tagName.innerHTML = listado[i].getElementsByTagName('name')[0].textContent; 
        let listaCateg = listado[i].getElementsByTagName('content');
        
    for (let c=0; c< listaCateg.length; c++){
        console.log (listaCateg[c]);
                    
    let tagImg = document.createElement('h4');
        tagImg.innerHTML = listaCateg[c].getElementsByTagName('img')[0].innerHTML;
    let tagCode = document.createElement('h3');
        tagCode.innerHTML = listaCateg[c].getElementsByTagName('code')[0].textContent;
    let tagDesc  = document.createElement('p');
        tagDesc.innerHTML = listaCateg[c].getElementsByTagName('desc')[0].textContent;   
    let tagBr = document.createElement('br');

            
article.appendChild(tagName);
article.appendChild(tagImg);
article.appendChild(tagCode);
article.appendChild(tagDesc); 
article.appendChild(tagBr);
        }        
    }
}
