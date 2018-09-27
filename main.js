var Scrolling = false;

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    Scrolling = true;
    //console.log("Will I let you scroll?", Scrolling);
    //console.log(this.hash);

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      if(this.hash == "#home") {var hash = ".container" + this.hash;}
      else {var hash = ".section" + this.hash;}
      //console.log(hash);
      console.log(hash);
      console.log($(hash).offest);
      var dist = $(hash).offset().top;

      //console.log($(hash).offset().top);
      //console.log(dist);
      
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: dist
      }, 200, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  setTimeout(scrollTrue, 1000);
  });
});

/*
function resetScroll() {
  setTimeout(scrollTrue, 1000);
}*/

function scrollTrue() {
  console.log("Time is Up");
  Scrolling = false;
};



$(function() {
      $( 'ul.nav li' ).on( 'click', function() {
            $( this ).parent().find( 'li.active' ).removeClass( 'active' );
            $( this ).addClass( 'active' );
      });
});


window.onscroll = function(){myScroll()};

function myScroll() {
  if(Scrolling == false) {
    var storeHash;
    if($(document).scrollTop() >= $('.container#home').position().top) {storeHash = 'home'};
    if($(document).scrollTop() >= $('.section#libellum').position().top) {storeHash = 'libellum'};
    if($(document).scrollTop() >= $('.section#dsgn308').position().top) {storeHash = 'dsgn308'};
    if($(document).scrollTop() >= $('.section#industrial').position().top) {storeHash = 'industrial'};
    if($(document).scrollTop() >= $('.section#disc').position().top) {storeHash = 'disc'};
    console.log("stored hash: ", storeHash);
    console.log()
    var listItems = $('.nav').find("li");
    for(let li of listItems) {
      if(storeHash == $(li).attr('id')) {$(li).addClass( 'active');}
      else if($(li).hasClass('active')) {$(li).removeClass('active');}
    }
  }
};
