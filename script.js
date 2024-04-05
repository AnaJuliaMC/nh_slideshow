
const slide = document.querySelector('.slide');
const imagens = [
    './imagens/img1.jpeg',
    './imagens/img2.jpeg',
    './imagens/img3.jpeg'
]

var time = 1000
var count = 0

function passarSlide(){
    slide.src = imagens[count]
    if(count < imagens.length - 1){
        count++;
    }
    else{
        count = 0
    }
     setTimeout('passarSlide()', time)
}

window.onload = passarSlide