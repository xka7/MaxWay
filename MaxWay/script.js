$(document).ready(function() {
    $('.variable-width').slick({
        infinite: false,
        speed: 300,
        arrows: true,
        variableWidth: true,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-next" aria-label="Next" type="text"><</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="text">></button>',
    });
});