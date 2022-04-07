/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our", "my", "your"];
let adj = ["great", "big", ""];
let noun = ["jogger", "racoon"];

// recorrrer todos los elementos de cada arreglo para juntarlos en una oración

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      console.log(`${pronoun[i]}${adj[j]}${noun[k]}.com`);
    }
  }
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let element = document.getElementById("excuse");
  element.innerHTML = result;
};
