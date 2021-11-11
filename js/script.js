// DOM manipulation

// Collapse Nav bar
$(function() { // Same as document.addEventListener ("DOMContent Loaded")
    
  // Same as document.querySelector ("navbarToogle").addEventListener("blur")
  $("#navbarToggle").blur(function (event) {
      var screenWidth = window.innerWidth;
      if (screenWidth < 963) {
          $("#collapsable-nav").collapse('hide');
      }
  });

});





//Event handling
/* document.addEventListener("DOMContentLoaded",
  function (event) {

    //Unobstrusive event binding
    document.querySelector("button")
    .addEventListener("click", function(){
        var self = this;
        var name ="";

        //  Call server to get the name
        $ajaxUtils
        .sendGetRequest("../data/name.txt",
        function (request) {
            self.name = request.responseText;
        });
        document.querySelector("#content")
        .innerHTML = "<h2>Hello " + self.name + "!";
    });

  }
  ); */

  (function (global) {

    var cons = {};

    var researchHtml = "snippets/level-tile-snippet.html";

    // Convinience function for inserting innerHTML for 'select'
    var insertHtml = function (selector, html) {
      var targetElem = document.querySelector(selector);
      targetElem.innerHTML = html;
    };

    // Show loading icon inside element identified by 'selector'
    var showLoading = function(selector) {
      var html = "<div class= 'text-center'>";
      html += "<img src= '../images/ajax-loader.gif'> </div>";
      insertHtml(selector, html);
    };

    // On page load (before images or CSS)
    document.addEventListener("DOMContentLoaded", function (event) {

      // On first load, show Resarch level
      showLoading("#research-content");
      $ajaxUtils.sendRequest ( researchHtml, function (responseText) {
          document.querySelector ("#research-content").innerHTML = responseText;
        },  false);      
    });

    global.$cons = cons;

  }) (window); 