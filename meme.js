const BASE_URL = 'https://api.imgflip.com/get_memes'

async function main() {
    document.getElementById("search").addEventListener("keyup", search);
    const response = await fetch(BASE_URL);
    let datos = await response.json();
    data = datos.data.memes;
    localStorage.setItem("datos",data);
    displayData(datos.data.memes);
}

function displayData(data) {
    let display = "";
    data.forEach((post) => {
        display += `
         <ul id="${post.id}" hidden>
         <li><strong>Nombre:</strong> ${post.name}</li>
         <li><strong>XD: </strong> <img src="${post.url}" alt="Italian Trulli">
         </ul>
         `;
    });
    document.getElementById("data").innerHTML = display;
}

function search() {
    let text = document.getElementById("search").value;
    data.forEach((post) => {
        if(match(post.name,text)){
            show(post.id);
        }
        else{
            hide(post.id);
        }
    });
}

/**
* Si substring es parte de word, retorna true, si no retorna false
* @param {String} word
* @param {String} substring
*/
function match(word, substring) {
    return word.includes(substring);
}

/**
* Oculta el elemento html que tiene el id elementId
* @param {String} elementId
*/
function hide(elementId) {
    document.getElementById(elementId).style.display = "none";
}

/**
* Muestra el elemento html que tiene el id elementId
* @param {String} elementId
*/
function show(elementId) {
    document.getElementById(elementId).style.display = "block";
}

main();


