var slideIndex = 1;

var prev = document.querySelector('.prev');
var next  = document.querySelector('.next');    

var slides = document.querySelectorAll('.mySlides');

createDots();
var dots = document.querySelectorAll('.dot');


prev.addEventListener('click', function(){
    hideSlides()
    showSlides(slideIndex -= 1)
})

next.addEventListener('click', function(){
    hideSlides()
    showSlides(slideIndex += 1)
})


setInterval()

function showSlides(numero){
    if(numero > slides.length){
        slideIndex = 1;
    }
    if(numero < 1){
        slideIndex = slides.length;
    }
    slides[slideIndex-1].classList.remove('hide-slide');
    dots[slideIndex-1].classList.add('active');
}

function hideSlides(){
    for(var i = 0; i<slides.length; i++){
        slides[i].classList.add('hide-slide');
        dots[i].classList.remove('active');
    }
}

function createDots(){
    var containerDots = document.querySelector('.container-dots');
    for(var i = 0; i<slides.length; i++){
        var li = document.createElement('li');
        li.classList.add('dot');
        if(i == 0){
            li.classList.add('active');
        }
        containerDots.appendChild(li);
    }
}
