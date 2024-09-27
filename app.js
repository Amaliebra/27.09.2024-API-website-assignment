const cont = document.querySelector(".api-cont");

import { url } from "/module.js";

async function fetchData() {
    const response = await fetch(url);
    console.log(response);
    await checkApi(response);

    const data = await response.json();
    console.log(data);
    mainHtml(data);
}

async function checkApi() {
    if (api.status === 200) {
        console.log("OMG ITS WORKING!!!")
    } else {
        throw new Error(api.statusText);
    }
}


function mainHtml(data) {
  
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const img = document.createElement("img");

    h1.textContent = "OMG RANDOM DOG PICTURES?!?!"
    img.src = data.message;

    div.appendChild(h1);
    div.appendChild(img);
    cont.appendChild(div);
}

cont.innerHTML += "<div><h1>DOGS</h1></div>";

mainHtml();