
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY)
})


$(document).on('scroll', function(){
    $('h3').css("left", Math.max(1000 - 0.85*window.scrollY, 100) + "px") 
})
// 70