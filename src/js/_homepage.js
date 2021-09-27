import { tns } from "tiny-slider/src/tiny-slider"
if(document.querySelector(".industries-sec")){
    tns({
        container:".industries-sec .slider-container",
        items:3,
        nav:false,
        controlsText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']
    })
}