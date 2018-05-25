document.addEventListener("DOMContentLoaded", (event) => {
  feather.replace();

  // const home = {
  //
  // };

  const animateNav = () => {
    if ($(".nav-icon").hasClass("hidden")){
      $("#arrow").css({"transform": "rotate(-180deg)"});
      $(".nav-icon").not(document.getElementById("arrow")).removeClass("hidden").addClass("visible");
    } else {
      $("#arrow").css({"transform": "rotate(0deg)"});
      $(".nav-icon").not(document.getElementById("arrow")).removeClass("visible").addClass("hidden");
    }
  };

  const subtitles = ["a web developer.", "a student.", "a photographer.", "an audiophile.", "my cat's subordinate human."];
  var sub;

  const fadeSubtitle = () => {
    $("#sub").css({"opacity": "0"});
    setTimeout(()=>{
      $("#sub").html(subtitles[sub]);
      $("#sub").css({"opacity": "1"});
      sub <= 3 ? sub++ : sub = 0;
      startFade();
    }, 1500);
  };

  $("#arrow").on("click", () => {
    animateNav();
  });

  $(".subtitles").mouseover(()=>{
    if (sub){
      return void 0;
    } else {
      sub = 1;
      fadeSubtitle();
    }
  });

  startFade = ()=>{
    setTimeout(()=>{
      fadeSubtitle();
    }, 3000);
  };

});
