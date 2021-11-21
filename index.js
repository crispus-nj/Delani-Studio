$(document).ready(function () {
  $(".design-image").click(function () {
    $(".design-description").toggle();
  });
  $(".development-icon").click(function () {
    $(".development-description").toggle();
    $(".development-icon").hide()
  });
  $(".product-icon").click(function () {
    $(".product-description").toggle();
  });
});
