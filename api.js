const BASE_URL = 'https://dog.ceo/api/breed/'

const clear = section => section.innerHTML=''
const IMG_TAG = 'img'

async function main(){
    const nombreDeEntrada = document.getElementById("nombre-entrada")
    const nombreDePerro = nombreDeEntrada.value.toLowerCase();
    search(nombreDePerro);
}

async function search(nombre){
    let data = null;
    let URLFINAL = `${BASE_URL}${nombre}/images/random`
    const response = await fetch(URLFINAL);
    data = await response.json();
    displayData(data);
}
function displayData(data){
    const { message } = data;
    const imgLink = message;
    const img = document.createElement(IMG_TAG);
    img.src = imgLink;
    const imgPlace= document.getElementById("data");
    clear(imgPlace);
    imgPlace.appendChild(img);

}


