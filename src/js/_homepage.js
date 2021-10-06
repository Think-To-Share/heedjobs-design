import { tns } from "tiny-slider/src/tiny-slider"
if(document.querySelector(".industries-sec")){
    tns({
        container:".industries-sec .slider-container",
        items:2,
        nav:false,
        controls:false,
        responsive: {
            768:{
              items: 3,
              controlsText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
              controls:true
            }
        }
    })
}
if(document.querySelector(".success-section")){
    tns({
        container:".success-section .slider-container",
        items:2,
        nav:false,
        controls:false,
        responsive: {
            768:{
              items:5,
              controlsText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
              controls:true
            }
        }
    })
}