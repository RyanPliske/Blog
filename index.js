"use strict";

function Setup() {
  $( function() { 
    $("#navbar").load("navbar.html");
    $("#blog-header").load("blog-header.html");
    $("#sidebar").load("sidebar.html");
    $("#post1").load("post1.html");
    $("#footer").load("footer.html");
  });
}
