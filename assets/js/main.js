
var i = [0];
var images = [];
var time = 3000;

images[0] = './assets/images/player/player1.jpg';
images[1] = './assets/images/player/player2.jpg';
images[2] = './assets/images/player/player5.jpg';
images[3] = './assets/images/player/player6.jpg';

function changeImg() {
    document.slide.src = images[i]

    if (i < images.length - 1) {
        i++
    } else {
        i = 0
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;

let year = document.querySelector('#year').innerHTML = new Date().getFullYear();
