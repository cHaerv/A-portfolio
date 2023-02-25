
document.addEventListener("DOMContentLoaded",function() {
    setTimeout (function() {
        $(".home-h2").removeClass("hidden");
        $(".home-h2").addClass("anim-fadeIn");
    }, 1500);
});

let evilEye = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
        }
    });
});


let hideScrollElements = document.querySelectorAll(".hide");

hideScrollElements.forEach((el) => evilEye.observe(el));


// $(document).ready(function() {
//     $.ajax({
//         URL: "https://github.com/cHaerv/novaCord-site",
//         type: "GET",
//         success:function(result) {
//             console.log(result)
//         }, error:function(error) {
//             console.log(error)
//         }
//     })
// })