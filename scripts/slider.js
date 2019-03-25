let i = 0;
let images = [];
let time = 4000;

//Lista de imagenes
images[0] = '../img/slide1.jpg';
images[1] = '../img/slide2.jpg';
images[2] = '../img/slide3.jpg';
images[3] = '../img/slide4.jpg';
images[4] = '../img/slide5.jpg';

function changeImg(){
    document.image.src = images[i];

    if(i < images.length - 1){
        i++;
    } else{
        i = 0;
    }

    setTimeout(changeImg, time);
}

window.onload = changeImg;