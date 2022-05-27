$(document).ready(function(){
    $(".carousel").owlCarousel({
        items: 3,
        loop: true,
        autoplay:true,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,

    });
});


//scroll
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%"
}




