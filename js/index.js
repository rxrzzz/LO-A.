const images = document.querySelectorAll('img')

let imgModal = (src) => {
    const modal = document.createElement("dialog")
    modal.setAttribute("class", "modal")
    document.querySelector("body").append(modal)
    const newImage = document.createElement("img")
    newImage.setAttribute("src", src)
    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("class", "closeBtn");
    closeBtn.innerText = "X"

    modal.append(newImage)
    closeBtn.addEventListener = ("click", () => {
        modal.style.display = "none"
    })
    modal.append(closeBtn)
}

images.forEach((img) => {
    img.addEventListener("click", (e) => {
        let imgSrc = e.target.src
        imgModal(imgSrc)
    })
})

