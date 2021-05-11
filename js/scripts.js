new SmoothScroll('a[href*="#"]' , {
    easing: 'linear',
    speed: 1000
});

new WOW().init();


const clc = document.querySelector(".cancel");
const arr = document.querySelector(".arr_container");
const left_container = document.querySelector(".left_container");

arr.addEventListener("click", ()=>{
    arr.classList.add("active_arr");
    if(left_container.classList.contains("off")){
        left_container.classList.remove("off");
        left_container.classList.add("active");
    }
});

clc.addEventListener("click", ()=>{
    arr.classList.remove("active_arr");
    if(left_container.classList.contains("active")){
        left_container.classList.remove("active");
        left_container.classList.add("off");
    }
})

$('#skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
        var width = $(this).data("val");
        $(this).css('width' , width + '%');
    });
}, { offset: '80%'} );

$(window).on('scroll load' , function () {
    if ($(window).scrollTop() > 120) {
        $('#navbar').css('background-color', 'rgba(58.8 , 45.5 , 34.5 , 0.7)').css('padding', '15px 40px');
    } else {
        $('#navbar').css('background-color', 'rgba(0 , 0 , 0 , 0)').css('padding', '20px 40px');
    }

    if ($(window).scrollTop() > 250) {
        $('#go-to-top').css('opacity' , '1').css('visibility' , 'visible');
    } else {
        $('#go-to-top').css('opacity' , '0').css('visibility' , 'hidden');
    }
});
