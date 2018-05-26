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
    subtitles: ["a web developer.", "a student.", "a photographer.", "an audiophile.", "my cat's subordinate human."],
    sub: 0,
    rotateSub: false,
    fadeSubtitle: ()=>{
      $("#sub").css({"opacity": "0"});
      setTimeout(()=>{
        $("#sub").html(home.subtitles[home.sub]);
        $("#sub").css({"opacity": "1"});
        home.sub <= 3 ? home.sub++ : home.sub = 0;
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
