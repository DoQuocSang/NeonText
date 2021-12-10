//------------------Btn------------------
{
    let btn = document.querySelector('.btn');
    let header = document.querySelector('header')
    let audio = document.querySelector('#audio')
    btn.onclick = function(){
        header.classList.toggle('on');
        audio.play();
    }
}

//------------------SlideNav------------------
{
    var mainBtn = document.querySelector('.main-text-btn');
    var slideNav = document.querySelector('.slideNav');

    slideNav.style.top ="-100vh";

    mainBtn.onclick = function(){
        if(slideNav.style.top == "-100vh"){
            slideNav.style.top = "0";
        }
        else{
            slideNav.style.top = "-100vh";
        }
    }
}