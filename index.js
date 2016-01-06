"use strict";

function Setup() {
  $( function() { 
    $("#navbar").load("navbar.html");
    $("#blog-header").load("blog-header.html");
    $("#sidebar").load("sidebar.html");
    $("#post1").load("post1.html");
    $("#post2").load("post2.html");
    $("#post3").load("post3.html", function() {
		$('pre code').each(function(i, block) {
		    hljs.highlightBlock(block);
  		});
	  });
    $("#footer").load("footer.html");
  });
}