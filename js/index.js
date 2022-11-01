// Run on document being ready
$(document).ready(function() {
	on_doc_ready();
});
function on_doc_ready(){
    // Initialize AOS
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
};

// Navigation
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".nav_icon");


// Buttons
navToggle.addEventListener("click", () => {

    const visiblity = nav.getAttribute("data-visible");

    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }

})


// Loading Screen fade out
$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});