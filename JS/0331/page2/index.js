
console.log(document.querySelector('.text-warp h2').getBoundingClientRect().top + window.pageYOffset);
let posY = document.querySelector('.text-warp h2').getBoundingClientRect().top + window.pageYOffset;
window.onscroll = function(){
    // 스크롤 했을때
    console.log('스크롤됨');
    console.log(window.scrollY);
    if(posY < window.scrollY){
        document.querySelector('.header').classList.add("isActive");
    }else{
        document.querySelector('.header').classList.remove("isActive");
    }
}