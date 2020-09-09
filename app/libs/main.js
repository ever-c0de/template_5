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
          },
        },
      ],
    });

    var show_burger = document.getElementById("burger__menu");
    var burger_button = document.getElementById("burger-button");
    show_burger.style.display = "none";
    burger_button.addEventListener("click", function () {
      if (show_burger.style.display == "none") {
        show_burger.style.display = "flex";
      } else {
        show_burger.style.display = "none";
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 852) {
        show_burger.style.display = "none";
      }
    });
  });
})();
