$(document).ready(function () {
  $(".overlay").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $(".prev").trigger();
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $(".next").click();
    }
  });

  // $(function () {
  //   var e = $.Event("keypress");
  //   e.which = 37; // Character 'A'
  //   console.log("kiri")
  //   //
  // });
  //   (left = 37), (up = 38), (right = 39), (down = 40);
  //   $(document).keydown(function (e) {
  //     switch (e.which) {
  //       case 37:
  //         $(".prev").click();
  //         break;
  //       case 38:
  //         $(".prev").click();
  //         break;
  //       case 39:
  //         $(".next").click();
  //         break;
  //       case 40:
  //         $(".next").click();
  //         break;
  //       default:
  //         return;
  //     }
  //   });
});
