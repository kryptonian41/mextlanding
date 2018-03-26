var logo = $(".cus-navbar--logo > img");
console.log(logo);
function shrinkLogo() {
  logo.css("width", "50px");
}

function expandLogo() {
  logo.css("width", "100px");
}

$(document).ready(function() {
  var shrink = false;
  var initialPosition =  60;
  $(window).on("scroll", function() {
    var currentPosition = $(window).scrollTop();
    if (currentPosition > initialPosition && !shrink) {
      console.log("shrink");
      shrink = !shrink;
      shrinkLogo();
    } else if (currentPosition < initialPosition && shrink) {
      console.log("expand");
      shrink = !shrink;
      expandLogo();
    }
  });
});
