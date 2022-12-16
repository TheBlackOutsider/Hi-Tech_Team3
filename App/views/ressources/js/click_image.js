
let tab = ["product-1/slide-1-lg.jpg", "product-1/slide-2-lg.jpg", "product-1/slide-3-lg.jpg", "product-1/slide-4-lg.jpg", "product-1/slide-5-lg.jpg"]
let container = document.querySelector(".product-picture>img");
let images_block = document.querySelectorAll(".images img");
images_block.forEach(function (element, index) {
    element.addEventListener("click", function (e) {
        e.preventDefault();
        container.setAttribute("src", tab[index]);

        // element.classList.add("border_img");
    })
});

/*Script largest modal*/

let closes = document.querySelector("#close1");
let openModal = document.querySelector("#openModal")
closes.addEventListener("click", function (e) {
    openModal.style.display = "none";
})


let containerBlock = document.querySelector(".product-picture>img");
containerBlock.addEventListener("click", function (e) {

    let container_modal = document.querySelector(".container_modal>img")
    let srcSource = containerBlock.getAttribute("src")
    openModal.style.display = "block";
    container_modal.setAttribute("src", srcSource)
})
let modal_image = document.querySelector("#modal_image")
let images_zone = document.querySelectorAll(".images_zone img");
console.log(images_zone);
images_zone.forEach(function (element, index) {
    element.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("click");
        let srcSource = element.getAttribute("src")
        console.log(srcSource);
        modal_image.setAttribute("src", srcSource);
        // element.classList.add("border_img");
    })
});

