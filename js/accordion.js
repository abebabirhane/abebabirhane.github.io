$(function () {
  // Initialise the accordion:
  $("#accordion").accordion({
    heightStyle: "content",
    collapsible: true,
    active: false,
    header: "h1",
  });
  // Get the #hash in the URL:
  var hash = window.location.hash;
  hash = hash.slice(1);
  console.log("boop");
  // console.log(hash);
  var active = false;
  // Activate appropriate accordion item and scroll to it:
  if (hash === "talks") {
    active = 0;
    console.log(0);
  } else if (hash.slice(0, 3) === "pub") {
    active = 1;
  } else if (hash === "pub2") {
    active = 2;
  }

  if (hash) {
    $("#the_accordion").accordion("option", "active", active);
    $("html,body").animate({
      scrollTop: $("#the_accordion").offset().top,
    });
  }
});
