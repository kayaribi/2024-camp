// $(".hamburger").click(function () {
//     $(".frame").toggleClass("action");
//   });

  $(".hamburger").click(function () {
    $(".frame").toggleClass("active");
    $(".hamburger-icon").toggleClass("close");
    $(".closure").toggleClass("close");
    $(".frame").toggleClass("close");
  });