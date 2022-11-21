
var i = 0;
var images =["./images/realestate6.jpg",
            "./images/realestate7.jpeg",
            "./images/realestate8.jpeg",
            "./images/realestate9.jpeg",
            "./images/realestate10.jpeg",
            // "./images/hotel10.jpeg",
];

var time =3000;


function changeImage() {
    document.slide.src=images[i];
    if (i < images.length-1){
        i++;
    }else{
        i=0;
    }
    setTimeout("changeImage()", time);
}
window.onload = changeImage;
// changeImage();


const submits = document.querySelector(".buttondown");

submits.onclick = function (){
    alert("Congatulations, your appliction is approved");
}