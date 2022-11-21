
const allnav = document.querySelector("nav");
const navlinks = document.querySelector(".nav_links2");
const open = document.querySelector("#nav_toggle-open2");
const close = document.querySelector("#nav_toggle-close2");
const both = document.querySelector("body");

// both.onscroll = function () {
//     allnav.classList.toggle("nove");
// }


open.onclick = function () {
    navlinks.style.transform ="scale(1)";
    open.style.display = "none";
    close.style.display = "block";

}
close.onclick = function (){
    navlinks.style.transform ="scale(0)";
    open.style.display = "block";
    close.style.display = "none";
}



var i = 0;
var images =["./images/Travel3.jpg",
            "./images/travelconsultantimage1.jpg",
            "./images/traveling3.jpg",
            "./images/traveling4.jpg",
            "./images/traveling5.jpg",
            // "./images/hotel10.jpeg",
];

var time =3000;


function changeImage() {
    document.slide2.src=images[i];
    if (i < images.length-1){
        i++;
    }else{
        i=0;
    }
    setTimeout("changeImage()", time);
}
window.onload = changeImage;
// changeImage();




// SWIPER WORK

const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay:{
        display: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
    
    // // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    

});



// var index = 0;
// var images =["./images/travel40.jpg", "./images/travel.jpg"];

// var times =3000;


// function changeImages() {
//     document.slides.src=images[index];
//     if (index < images.length-1){
//         index ++;
//     }else{
//         index =0;
//     }
//     setTimeout("changeImages()", times);
// }
// window.onload = changeImages;
