(function () {
  "use strict";

  /* Slider section */

  $(document).ready(function () {
    $(".slider").slick({
      // autoplay
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      dots: true,

      // fade
      useTransform: true,
      speed: 2000,
      fade: true,
      cssEase: "cubic-bezier(0.22, 1, 0.36, 1)",
    });

    /* Development slider */

    let sl = document.getElementById("mark");
    let bt = document.getElementsByClassName("development__block").length;

    /* Mentor's slider */
    $(".slider-bottom").slick({
      // autoplay
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      dots: true,
      rows: 0,
    });

    let show_burger = document.getElementById("burger");
    let burger_button = document.getElementById("burger-button");
    show_burger.style.display = "none";
    burger_button.addEventListener("click", function () {

      if (show_burger.style.display == "none") {
        show_burger.style.display = "flex";
      } else {
        show_burger.style.display = "none";
      }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 852) {
        show_burger.style.display = "none";
      }
    });
  });
})();