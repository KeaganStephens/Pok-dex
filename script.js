function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); 
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}
 
function addCode(name,img,arr,id) {
    document.getElementById("attempts")
        .innerHTML +=
        `
        <div class="container grid-item containerSort hover-trigger">
                <p class="center">${name.charAt(0).toUpperCase() + name.slice(1)}</p>
                <div class="target-element">
                    <img class="target-element" src="${img}" alt="${name}">
                </div>
                <div id="${id}" class="centered-element"></div>
            </div>`;
    for(let i in arr){
        document.getElementById(id)
        .innerHTML +=
        `<p>${arr[i].charAt(0).toUpperCase() + arr[i].slice(1)}</p>`;
        // console.log(arr[i])
    }
}

var data = JSON.parse(Get("https://pokeapi.co/api/v2/pokemon?limit=151"));
// console.log(data)

for(let i in data.results){
    let arrInfo = []
    let info = JSON.parse(Get(data.results[i].url))
    // console.log(info.id)

    let forms = JSON.parse(Get(info.forms[0].url))
    // console.log(forms.types)
    
    for(let i in forms.types){
        arrInfo.push(forms.types[i].type.name)
    }
    // console.log(arrInfo)
    // console.log(forms.sprites.back_default)
 
    addCode(data.results[i].name, forms.sprites.back_default, arrInfo, info.id)
}

     // Get references to the trigger element (containerSort) and target elements
     const containerSort = document.querySelectorAll('.containerSort');
     const targetElements = containerSort.querySelectorAll('.target-element');

     // Add a mouseover event listener to the trigger element (containerSort)
     containerSort.addEventListener('mouseover', () => {
         // Add the 'hovered' class to each target element
         targetElements.forEach((element) => {
             element.classList.add('hovered');
         });
     });

     // Add a mouseout event listener to the trigger element (containerSort)
     containerSort.addEventListener('mouseout', () => {
         // Remove the 'hovered' class from each target element
         targetElements.forEach((element) => {
             element.classList.remove('hovered');
         });
     });


