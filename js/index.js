const images = document.querySelectorAll(".img");
const closeBtn = document.querySelector('.closeBtn')
const modal = document.createElement("dialog");

let imgModal = (src) => {
  closeBtn.style.display = "block"
  modal.setAttribute("class", "modal");
  document.querySelector("body").prepend(modal);
  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);
  closeBtn.onclick = () => {
    modal.innerHTML = ""
    modal.remove();
    closeBtn.style.display = "none"
  };
  modal.append(newImage, closeBtn);
};

images.forEach((img) => {
  img.addEventListener("click", (e) => {
    let imgSrc = e.target.src;
    imgModal(imgSrc);
  });
});
