const images = document.querySelectorAll("img");
const closeBtn = document.createElement("button");
const modal = document.createElement("dialog");

let imgModal = (src) => {
  modal.setAttribute("class", "modal");
  document.querySelector("body").prepend(modal);
  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);
  closeBtn.setAttribute("class", "closeBtn");
  closeBtn.innerText = "X";
  closeBtn.onclick = () => {
    modal.remove();
    modal.innerHTML = "<p></p>"
  };
  modal.append(newImage, closeBtn);
};

images.forEach((img) => {
  img.addEventListener("click", (e) => {
    let imgSrc = e.target.src;
    imgModal(imgSrc);
  });
});
