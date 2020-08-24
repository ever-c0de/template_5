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

    let blocks = document.getElementsByClassName("development__block").length;
    console.log(blocks);

    let sl = document.getElementById("mark");
    let bt = document.getElementsByClassName("development__block");

    /* Mentor's slider */
    $(".slider-bottom").slick({
      // autoplay
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
    });

    if (blocks > 3) {

      $(".slider-top").slick({
        // autoplay
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
      });
      sl.style.display = "block";
      sl.style.padding = "0";
      sl.style.verticalAlign = "top";


    }
  });

})();