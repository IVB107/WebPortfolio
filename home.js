document.addEventListener("DOMContentLoaded", (event) => {
  feather.replace();

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
    subtitles: ["web development.", "learning and expanding my education.", "photography.", "music & my vinyl collection.", "travel and discovering new places."],
    sub: 0,
    rotateSub: false,
    fadeSubtitle: ()=>{
      $("#sub").css({"opacity": "0"});
      // !!! - refactor this function: include forEach method, make callback only after iterating through array
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
      }, 3000);
    },
  };

  $("#arrow").on("click", () => {
    animateNav();
  });

  $(window).ready(()=>{
    home.startFade();
  });

});
