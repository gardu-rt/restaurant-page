import { home } from "./script/home.js";
import { menuPage } from "./script/menu.js";
import { contact } from "./script/contact.js";
import "./styles/reset.css";
import "./styles/styles.css";
console.log("My Restaurant!");

export const content = document.querySelector("#content");
export const nav = document.querySelector("nav");

export const clearElement = function (el) {
  el.innerHTML = "";
};

home(content);

nav.addEventListener("click", event => {
  const target = event.target;
  if (target.classList.contains("home")) {
    clearElement(content);
    home(content);
  } else if (target.classList.contains("menu")) {
    clearElement(content);
    menuPage(content);
  } else if (target.classList.contains("contact")) {
    clearElement(content);
    contact(content);
  }
});
