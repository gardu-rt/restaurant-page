import nasiGoreng from "../images/nasi-goreng.jpg";
import pempek from "../images/pempek.jpg";
import rendang from "../images/rendang.jpg";
import satay from "../images/sate-ayam-madura.jpg";

const menuList = [
  {
    name: "Nasi Goreng",
    price: 2.5,
    img: nasiGoreng
  },
  {
    name: "Pempek",
    price: 1.5,
    img: pempek
  },
  {
    name: "Rendang",
    price: 5,
    img: rendang
  },
  {
    name: "Satay",
    price: 2.5,
    img: satay
  }
];

export const menuPage = function (parent) {
  const h1 = document.createElement("h1");
  h1.textContent = "Menu";
  parent.appendChild(h1);

  const divMenu = document.createElement("div");
  divMenu.classList.add("menu");
  parent.appendChild(divMenu);

  for (const menu of menuList) {
    const divItem = document.createElement("div");
    divItem.classList.add("item");
    divMenu.appendChild(divItem);

    const itemName = document.createElement("h2");
    itemName.textContent = menu.name;
    divItem.appendChild(itemName);

    const image = document.createElement("img");
    image.src = menu.img;
    divItem.appendChild(image);
  }
};
