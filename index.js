"use strict";

function loadHTML() {
  $( function() { 
    $("#navbar").load("navbar.html");
    $("#blog-header").load("blog-header.html");
    $("#sidebar").load("sidebar.html");
    $("#post1").load("post1.html");
    $("#post2").load("post2.html");
    $("#post3").load("post3.html", highlight);
    $("#footer").load("footer.html");
  });
};

function prepareAccordion() {
  $( function() { 
    $("#accordion").accordion({ 
      collapsible: true,
      active: false,
      heightStyle: "content",
      beforeActivate: hackAccordion
    });
  });
};

var highlight = function() {
  hljs.initHighlighting()
};

var hackAccordion = function(event, ui) {
         // The accordion believes a panel is being opened
        if (ui.newHeader[0]) {
            var currHeader  = ui.newHeader;
            var currContent = currHeader.next('.ui-accordion-content');
         // The accordion believes a panel is being closed
        } else {
            var currHeader  = ui.oldHeader;
            var currContent = currHeader.next('.ui-accordion-content');
        }
        var isPanelSelected = currHeader.attr('aria-selected') == 'true';
        currHeader.toggleClass('ui-corner-all',isPanelSelected).toggleClass('blog-post-title',!isPanelSelected).attr('aria-selected',((!isPanelSelected).toString()));
        // currHeader.children('.ui-icon').toggleClass('ui-icon-triangle-1-e',isPanelSelected).toggleClass('ui-icon-triangle-1-s',!isPanelSelected);
        currContent.toggleClass('blog-post',!isPanelSelected)    
        if (isPanelSelected) { 
          currContent.slideUp(); 
        }  else { 
          currContent.slideDown(); 
        }
        return false; // Cancel the default action
};