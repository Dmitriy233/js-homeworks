



let slideIndex = 0;
const sliderBlock = [...document.querySelector('.wrapper').children];
console.log(sliderBlock)
document.getElementById('btn-next').addEventListener('click', function () {
    
    if( slideIndex  === sliderBlock.length -1){
        slideIndex = 0;

        return sliderBlock[slideIndex].style.display = 'block';
    }

    sliderBlock[slideIndex].style.display = 'none';
    sliderBlock[++slideIndex].style.display = 'block';
});

document.getElementById('btn-prev').addEventListener('click', function () {
    
    if( slideIndex < 0 ){
        slideIndex = sliderBlock.length-2;
    
        return sliderBlock[slideIndex].style.display = 'block';
    }

    sliderBlock[slideIndex].style.display = 'none';
    sliderBlock[--slideIndex].style.display = 'block';
});