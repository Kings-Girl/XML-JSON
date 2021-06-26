 let jsonReq = new XMLHttpRequest();

jsonReq.onload = function (){ 
    if (this.readyState === 4 && this.status === 200){
        readDetails (this);
    } else
        console.log ('Falla en la carga de datos');
};
jsonReq.open ('GET', 'http://localhost:5500/datos.json', true);
jsonReq.responseType = 'json'; 
jsonReq.send();

    function readDetails (jsonObj){
    let valoresJson = jsonObj.response;
    let listDetails = valoresJson.Details;
    let tagList = document.getElementById ('datosJSON');

    tagList.innerHTML = '';
    listDetails.forEach(element => {
        let tagCategory = document.createElement('h3');
        let tagProduct = document.createElement('h4');
        let tagStock = document.createElement('span');
        let tagTemp = document.createElement('h5');
        let tagDesc = document.createElement('p');

    tagCategory.innerHTML = element.Category;
    tagProduct.innerHTML = element.Product;
    tagStock.innerHTML = element.Stock; 
    tagTemp.innerHTML = element.Temp;
    tagDesc.innerHTML = element.Desc;
    
tagList.appendChild(tagCategory);
tagList.appendChild(tagProduct);
tagList.appendChild(tagStock); 
tagList.appendChild(tagTemp);     
tagList.appendChild(tagDesc);    

});
}