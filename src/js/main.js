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
      speed: 3000,
      fade: true,
      cssEase: "cubic-bezier(0.22, 1, 0.36, 1)",
    });

    /* Development slider */
  });
  let blocks = document.getElementsByClassName("development__block").length;
  console.log(blocks);

  if (blocks > 3) {
    $(".development__blocks").slick({
      // autoplay
      arrows: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      dots: true,

    });
  }
})();