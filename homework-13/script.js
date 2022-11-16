



let slideIndex = 0;
const sliderBlock = [...document.querySelector('.wrapper').children];

document.getElementById('btn-next').addEventListener('click', function () {

    if (slideIndex === sliderBlock.length - 1) {
        slideIndex = 0;
       sliderBlock[slideIndex].style.display = 'block';

    }else{     
        sliderBlock[slideIndex].style.display = 'none';
        sliderBlock[++slideIndex].style.display = 'block';
    };

});

document.getElementById('btn-prev').addEventListener('click', function () {

    sliderBlock[slideIndex].style.display = 'none';

    if (slideIndex === 0) {
        slideIndex = sliderBlock.length - 1;
        sliderBlock[slideIndex].style.display = 'block';

    }else{
        sliderBlock[slideIndex].style.display = 'none';
        sliderBlock[--slideIndex].style.display = 'block';

    };

});




