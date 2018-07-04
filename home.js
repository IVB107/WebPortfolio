document.addEventListener("DOMContentLoaded", (event) => {
  feather.replace();

  const getViewport = () => {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    // Hide 'Nav' menu for mobile users
    if (windowWidth > 700){
      $("nav").css("visibility", "visibile");
      $("#subtitles").removeClass("flex-col").addClass("flex-row");
    }
  };

  const animateNav = () => {
    if ($(".nav-icon").hasClass("hidden")){
      $("#arrow").css({"transform": "rotate(-180deg)"});
      $(".nav-icon").not(document.getElementById("arrow")).removeClass("hidden").addClass("visible");
    } else {
      $("#arrow").css({"transform": "rotate(0deg)"});
      $(".nav-icon").not(document.getElementById("arrow")).removeClass("visible").addClass("hidden");
    }
  };

  const home = {
    subtitles: ["furthering my education.", "photography and design.", "music and my vinyl collection.", "traveling to discover new places.", "avocado.", "camping, hiking & rock climbing."],
    sub: 1,
    fadeSubtitle: ()=>{
      $("#sub").css({"opacity": "0"});
      setTimeout(()=>{
        $("#sub").html(home.subtitles[home.sub]);
        $("#sub").css({"opacity": "1"});
        home.sub < (home.subtitles.length - 1) ? home.sub++ : home.sub = 0;
        home.startFade();
      }, 1500);
    },
    startFade: ()=>{
      setTimeout(()=>{
        home.fadeSubtitle();
      }, 2500);
    },
  };

  $("#arrow").on("click", () => {
    animateNav();
  });

  $(window).ready(()=>{
    getViewport();
    home.startFade();

  });

});
