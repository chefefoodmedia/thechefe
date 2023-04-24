$('.navbar-nav li a').click(function(){
  $(".navbar-collapse").removeClass('show');
});

// active class
$(document).ready(function() {
   $("nav ul li a").click(function() {
       $('.navbar-nav li a').removeClass('active');
       $(this).closest('li a').addClass('active');
   });
});
// end
// sticky herder
$(window).scroll(function() {
   if ($(this).scrollTop() > 2){  
     $('.tb-herder-cms').addClass("sticky");
   }
   else{
     $('.tb-herder-cms').removeClass("sticky");
   }
 });
// end

// back to top
 $(document).ready(() => {
 
   const backToTop = $('#backToTop')
   const amountScrolled = 300
   
   $(window).scroll(() => {
     $(window).scrollTop() >= amountScrolled 
       ? backToTop.fadeIn('fast') 
       : backToTop.fadeOut('fast')
   })
   
   backToTop.click(() => {
     $('body, html').animate({
       scrollTop: 0
     }, 600)
     return false
   })
 });
 // end

  /* --------------- Footer 992 Accordion Start---------------*/
$(document).ready(function() {
  function footerToggle() {
       if($( window ).width() < 992) {
           $("#tb-footer-cms .tb-footer-border .footer-toggle-menu h2").addClass("toggle");
           $("#tb-footer-cms .tb-footer-border .footer-toggle-menu h2.toggle").unbind("click");
               var Accordions = function(el, multiple) {
                   this.el = el || {};
                   this.multiple = multiple || false;
           
                   // Variables privadas
                   var link = this.el.find('.toggle');
                   // Evento
                   link.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
               }
           
               Accordions.prototype.dropdown = function(e) {
                   var $el = e.data.el;
                   $this = $(this),
                   $next = $this.next();
           
                   $next.slideToggle();
                   $this.parent().toggleClass('active');
           
                   if (!e.data.multiple) {
                   $el.find('ul.list-unstyled').not($next).slideUp().parent().removeClass('active');
                   };
               }   
           
               var accordions = new Accordions($('.tb-footer-manu'), false);
       } else {
           $("#tb-footer-cms .tb-footer-border .footer-toggle-menu h2.toggle").unbind("click");
           $("#tb-footer-cms .tb-footer-border .footer-toggle-menu h2").removeClass('toggle');
       }
   }
   $(document).ready(function() {footerToggle();});
   $(window).resize(function() {footerToggle();});

});

   /* --------------- Footer 992 Accordion End---------------*/
// about-us-couder
function inviewExample() {
    var $example = $('#inview-example');
    var inview;

    if ($example.length) {
      inview = new Waypoint.Inview({
        element: $('#inview-example')[0],
        entered: function(direction) {
          $('.timer').each(function () {
              var $this = $(this);
              var val = $(this).data('count');
              jQuery({ Counter: 0 }).animate({ Counter: val }, {
                duration: 1000,
                easing: 'swing',
                step: function () {
                  $this.text(Math.ceil(this.Counter));
                }
              });
            });
        }
      })
    }
}
$(window).on('load', function() {
 inviewExample();
});
// end


// loader
$(window).on('load', function () {

$(".main-loder").show();
$(".main-loder").fadeOut(2000);
});