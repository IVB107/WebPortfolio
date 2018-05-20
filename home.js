document.addEventListener("DOMContentLoaded", (event) => {
  feather.replace();

  // const changeClass = () => {
  //   for (let icon of icons){
  //     icon
  //   }
  // };
  // const icons = document.getElementsByClassName('nav-menu').getElementsByClassName('nav-icon');

  // const icons = document.getElementsByClassName('nav-icon');
  // icons.onclick() => {
  //   changeCLass();
  // }

  $("body").on('click', () => {
    console.log("Hey");
  });

  $(".nav-menu").on('click', () => {
    $(".nav-icon").removeClass("hidden");
  });

});
