export const contact = function (parent) {
  const h1 = document.createElement("h1");
  h1.textContent = "Contact Us";
  parent.appendChild(h1);

  const contactInfo = document.createElement("div");
  parent.appendChild(contactInfo);

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "Order Call: 081-555-5211";
  contactInfo.appendChild(phoneNumber);
};
