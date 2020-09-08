(function () {
  "use strict";

  $(document).ready(function () {
    $(".slider").slick({
      // autoplay
      arrows: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      rows: 0,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            rows: 0,
          }
        },
      ]
    });
  });
})();