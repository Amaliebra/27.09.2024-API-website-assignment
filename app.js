const cont = document.querySelector(".api-cont");

import { url } from "./module.js";

async function fetchData() {
    try {
        const response = await fetch(url);
        console.log(response);
        await checkApi(response);

        const data = await response.json();
        console.log(data);
        mainHtml(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        cont.innerHTML += "<div><h3>Error loading data</h3></div>";
    }
}

async function checkApi(response) {
    if (response.status === 200) {
        console.log("OMG ITS WORKING!!!")
    } else {
        throw new Error(response.statusText);
    }
}


function mainHtml(data) {
  
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");

    h3.textContent = "OMG RANDOM DOG PICTURES?!?!"
    img.src = data.message;

    div.appendChild(h3);
    div.appendChild(img);
    cont.appendChild(div);
}

cont.innerHTML += "<div><h1>DOGS</h1></div>";

fetchData();