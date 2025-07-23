export const home = function (parent) {
  const h1 = document.createElement("h1");
  h1.textContent = "INDONESIAN RESTAURANT";
  parent.appendChild(h1);

  const paragraph = document.createElement("p");

  // Naik satu folder untuk akses about.txt dari script/
  fetch("/about.txt")
    .then(response => {
      if (!response.ok) {
        throw new Error("Gagal memuat file about.txt");
      }
      return response.text();
    })
    .then(text => {
      paragraph.textContent = text;
      parent.appendChild(paragraph);
    })
    .catch(error => {
      console.error("Error:", error);
    });
};
