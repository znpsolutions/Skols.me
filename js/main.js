(function ($) {
    "use strict";

/* ==========================================================================
  // header stickey activation
========================================================================== */
$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $(".header-sticky").removeClass("sticky");
    } else {
      $(".header-sticky").addClass("sticky");
    }
  });
//nice select
$('select').niceSelect();
 
})(jQuery);	  

const navbar = document.querySelector( ".navbar-nav" );
a = navbar.querySelectorAll( "a" );


a.forEach( function ( element ) {
    element.addEventListener( "click", function () {
        for ( let i = 0; i < a.length; i++ ) {
            a[ i ].classList.remove( "active" );
        }

        this.classList.add( "active" )
        document.querySelector( ".navbar-nav" ).classList.toggle( "show" );
        $( ".navbar-collapse" ).collapse( "hide" );

    } )
} )   



    $(function(){
      // bind change event to select
      $('.select-lang').on('change', function () {
          var url = $(this).val(); // get selected value
          if (url) { // require a URL
              window.location = url; // redirect
          }
          return false;
      });
    });
