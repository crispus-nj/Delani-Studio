$(document).ready(function () {
  $(".design-image").click(function () {
    $(".design-description").toggle();
    $(".design-image").hide();
    $(".design, .design-description").click(function () {
      $(".design-image").show();
      $(".design-description").hide();
    });
  });
  $(".development-icon").click(function () {
    $(".development-description").toggle();
    $(".development-icon").hide();
    $(".development, .development-description").click(function () {
      $(".development-description").hide();
      $(".development-icon").show();
    });
  });
  $(".product-icon").click(function () {
    $(".product-description").toggle();
    $(".product-icon").hide();
    $(".product, .product-description").click(function () {
      $(".product-icon").show();
      $(".product-description").hide();
    });
  });
});
$(document).ready(function(){
  $('.img1').hover(function(){
    $('.img1-description').slideToggle(1000)
  })
})