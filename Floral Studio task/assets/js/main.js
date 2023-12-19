$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  autoplay: true,
  rewind: true,
  margin: 20,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
