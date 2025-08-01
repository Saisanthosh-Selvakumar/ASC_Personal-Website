let button_carousel_1 = document.querySelector("#button_carousel_1");
let carouselView = document.querySelector("#carouselView");

let imagesCarousel1 = ["Website_Wireframe", "ASC_Sai_Logo"];

let state_1 = 0;
button_carousel_1.onclick = function() {
    carouselView.children[0].src = "Images/" + imagesCarousel1[state_1] + ".png";
    state_1++;
    if (state_1 >= imagesCarousel1.length) {
        state_1 = 0;
    }
}