/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function onload() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let excusa = "";

  excusa +=
    who[Math.floor(Math.random() * 4)] +
    " " +
    what[Math.floor(Math.random() * 4)] +
    " " +
    when[Math.floor(Math.random() * 4)];
  document.getElementById("excuse").innerHTML = excusa;
};
