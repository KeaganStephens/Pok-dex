function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); 
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

function addCode(name,img) {
    document.getElementById("attempts")
        .innerHTML +=
        `<div class="container grid-itemr">
            <img class="center grid-item" src="${img}" alt="${name}">
            <p class="center">${name}</p>
        <div>`;
}
 
var data = JSON.parse(Get("https://pokeapi.co/api/v2/pokemon?limit=151"));
console.log(data)

for(let i in data.results){
    let info = JSON.parse(Get(data.results[i].url))
    // console.log(info.forms)

    let forms = JSON.parse(Get(info.forms[0].url))
    // console.log(forms.sprites.back_default)

    addCode(data.results[i].name,forms.sprites.back_default)
}




