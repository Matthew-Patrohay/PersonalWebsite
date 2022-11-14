// Occur on scroll
$('.wrapper').scroll(function () { 
    AOS.refresh(); // Refresh AOS to fix the issue with displaying 
    $(".scroll-down").fadeOut("slow"); // Get rid of scroll reminder arrow
});

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


// Function for showing the time selectors
/*
const navClock = document.querySelector(".nav_clock");
navClock.addEventListener("click", () => {
    const nav_clock = document.getElementById('nav_clock_selectors');
    const nav_clock_button = document.getElementById('nav_clock_button');

    if (nav_clock.style.display === "none") {
        nav_clock.style.display = "block";
        nav_clock_button.style.fill = "#d3d3d3";
    } else {
        nav_clock.style.display = "none";
        nav_clock_button.style.fill = "#a9a9a9";
    }
  })
*/

// Loading Screen fade out
$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});