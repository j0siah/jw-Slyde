if(!Modernizr.touch){ 
    $.stellar();
}
/*==============================================
fullPage
==============================================*/
            $(document).ready(function() {
	           $('#fullpage').fullpage({
                "verticalCentered": true,
			     'resize': true,
			     'sectionsColor' : ["#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff", "#fff"],
			     'anchors':["home","grid","blog","gallery","profile","brand","quote","pricing","shop","jw-contact"],
			     'scrollingSpeed': 700,
			     'easing': 'easeInQuart',
			     'menu': '#s-menu',
			     'navigation': true,
			     'navigationPosition': 'top',
			     'navigationColor': '#000',
			     'navigationTooltips': [],
			     'slidesNavigation': false,
			     'slidesNavPosition': 'bottom',
			     'controlArrowColor': '#FFFFFF',
			     'loopBottom': false,
			     'loopTop': false,
			     'loopHorizontal': true,
			     'autoScrolling': true,
			     'scrollOverflow': true,
			     'css3': false,
			     'paddingTop': 0,
			     'paddingBottom': 0,
			     'fixedElements': null,
			     'normalScrollElements': null,
			     'keyboardScrolling': true,
			     'touchSensitivity': 5,
			     'continuousVertical': false,
			     'animateAnchor': true,
			     'normalScrollElementTouchThreshold': 5,

			//events
			     'afterLoad': function(anchorLink, index){
					if(index == 1){
						$('#s-anim').addClass('flipInX');
					}
                 
                     if(index == 2){
						$('#s-gallery-1').addClass('flipInX');
					}
				},
			     'onLeave': function(anchorLink, index){
					if(index == 1){
						$('#s-anim').removeClass('flipInX');
					}
                     if(index == 2){
						$('#s-gallery-1').removeClass('flipInX');
                     }
				},
			     'afterRender': null,
			     'afterResize': null,
			     'afterSlideLoad': function( anchorLink, index, slideAnchor, slideIndex){
                              if(slideIndex == 1){
                                  $('#s-profile-1').addClass('flipInX');
                                  $('#s-profile-2').addClass('flipInX');
                                  $('#s-profile-3').addClass('flipInX');
                              }
                         if(slideIndex == 1){
                                  $('#s-price-1').addClass('flipInX');
                                  $('#s-price-2').addClass('flipInX');
                                  $('#s-price-3').addClass('flipInX');
            
                              }
                     if(slideIndex == 0){
                                  $('#s-video-1-left').addClass('flipInX');
                                  $('#s-video-1-right').addClass('flipInX');
            
                              }


                                },
			     'onSlideLeave': function( anchorLink, index, slideAnchor, slideIndex){
                              if(slideIndex != 1) {
                                 $('#s-profile-1').removeClass('flipInX');
                                 $('#s-profile-2').removeClass('flipInX');
                                 $('#s-profile-3').removeClass('flipInX');
                                  
                              }
                              if(slideIndex != 1) {
                                 $('#s-price-1').removeClass('flipInX');
                                 $('#s-price-2').removeClass('flipInX');
                                 $('#s-price-3').removeClass('flipInX');
                                  
                              }
                             if(slideIndex =! 0){
                                  $('#s-video-1-left').removeClass('flipInX');
                                  $('#s-video-1-right').removeClass('flipInX');
            
                              }
                     
                                },   
                   
               });
            });   
/* ==============================================
Magnific Popup
=============================================== */

$('.gallery-item').magnificPopup({
	
  type: 'image',
  gallery:{ 
  enabled:true,
  arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
}
  
});

$(document).ready(function() {
    $('.popup-shop-1').magnificPopup({
        type:'inline',
        midClick: true
    });
});

$(document).ready(function() {
    $('.popup-shop-2').magnificPopup({
        type:'inline',
        midClick: true
    });
});

$(document).ready(function() {
    $('.popup-shop-3').magnificPopup({
        type:'inline',
        midClick: true
    });
});

$(document).ready(function() {
    $('.popup-shop-4').magnificPopup({
        type:'inline',
        midClick: true
    });
});

$(document).ready(function() {
    $('.popup-shop-5').magnificPopup({
        type:'inline',
        midClick: true
    });
});

$(document).ready(function() {
    $('.popup-shop-6').magnificPopup({
        type:'inline',
        midClick: true
    });
});

$(document).ready(function() {
    $('.popup-cart').magnificPopup({
        type:'inline',
        midClick: true
    });
});

$(document).ready(function() {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });
/*==============================================
Simple Cart 
==============================================*/
simpleCart({
    // array representing the format and columns of the cart,
    // see the cart columns documentation
       cartColumns: [
       // {view :'image' , attr:'thumb', label: false},
        { attr: "name" , label: "Name" } ,
        { attr: "price" , label: "Price", view: 'currency' } ,
     /*  { view: function(item, column){
            return  ""+ item.quantity() +"" + "" + "+" +"-" +"";
                } , 
                attr: "custom" ,
                label: "Quantity"
                }, */
        { view: "input", attr: "quantity", label: "Qty" } ,
        { view: "decrement" , label: false , text: "-" } ,
        { view: "increment" , label: false , text: "+" } ,
        { attr: "total" , label: "SubTotal", view: 'currency' } ,
        { view: "remove" , text: "Remove" , label: false }
    ],
    // "div" or "table" - builds the cart as a 
    // table or collection of divs
    cartStyle: "table", 
    // how simpleCart should checkout, see the 
    // checkout reference for more info 
    checkout: { 
        type: "PayPal" , 
        email: "josiahdwilliams@gmail.com" 
    },
    // set the currency, see the currency 
    // reference for more info
    currency: "USD",
    // collection of arbitrary data you may want to store 
    // with the cart, such as customer info
    data: {},
    // set the cart langauge 
    // (may be used for checkout)
    language: "english-us",
    // array of item fields that will not be 
    // sent to checkout
    excludeFromCheckout: [],
    // custom function to add shipping cost
    shippingCustom: null,
    // flat rate shipping option
    shippingFlatRate: 0,
    // added shipping based on this value 
    // multiplied by the cart quantity
    shippingQuantityRate: 0,
    // added shipping based on this value 
    // multiplied by the cart subtotal
    shippingTotalRate: 0,
    // tax rate applied to cart subtotal
    taxRate: 0,
    // true if tax should be applied to shipping
    taxShipping: false,
    // event callbacks 
    beforeAdd            : null,
    afterAdd            : null,
    load                : null,
    beforeSave        : null,
    afterSave            : null,
    update            : null,
    ready            : null,
    checkoutSuccess    : null,
    checkoutFail        : null,
    beforeCheckout        : null,
    beforeRemove           : null
});
/* ==============================================
Liquid Slider - Home Text Slider
=============================================== */
$('#slider-home').liquidSlider({
	  autoSlide:          true,
	  autoSlideInterval:  4500,
	  autoSlideControls:  true,
	  forceAutoSlide: true,
	  dynamicArrows: false,
    
  slideEaseFunction:'animate.css',
  slideEaseDuration:900,
  heightEaseDuration:900,
  animateIn:"slideInLeft",
  animateOut:"slideOutRight",
  callback: function() {
    var self = this;
    $('.slider-6-panel').each(function() {
      $(this).removeClass('animated ' + self.options.animateIn);
    });
  }
});

/* ==============================================
Sticky Navbar
=============================================== */

$(document).ready(function(){
    $(".navbar").sticky({topSpacing:0});
  });
  
/* ==============================================
Navbar "hovernav" dropdown menu
=============================================== */

$(document).ready(function() {
  /*
	"Hovernav" navbar dropdown on hover
	Delete this segment if you don't want it, and delete the corresponding CSS in style.css
	*/
	var mq = window.matchMedia('(min-width: 768px)');
  if (mq.matches) {
    $('ul.navbar-nav li').addClass('hovernav');
  } else {
  	$('ul.navbar-nav li').removeClass('hovernav');
  };
	/*
	The addClass/removeClass also needs to be triggered
  on page resize <=> 768px
	*/
  if (matchMedia) {
    var mq = window.matchMedia('(min-width: 768px)');
    mq.addListener(WidthChange);
    WidthChange(mq);
  }
	function WidthChange(mq) {
    if (mq.matches) {
      $('ul.navbar-nav li').addClass('hovernav');
    } else {
      $('ul.navbar-nav li').removeClass('hovernav');
    }
  };
  
});

/* ==============================================
Auto Close Responsive Navbar on Click
=============================================== */

function close_toggle() {
if ($(window).width() <= 768) {
  $('.navbar-collapse a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });
}
else {
 $('.navbar .navbar-default a').off('click');
}
}
close_toggle();

$(window).resize(close_toggle); 
 

$(function(){
	$(".player").mb_YTPlayer();
});

/* ==============================================
Preloader
=============================================== */

jQuery(window).load(function(){
    jQuery("#preloader").delay(500).fadeOut(1000);
        jQuery(".preload-logo").addClass('fadeOutLeft');
		jQuery(".back-logo").addClass('fadeOutRight');
		jQuery(".preload-gif").addClass('fadeOutUp');
    
}); 
/* ==============================================
Fit Vids
=============================================== */
$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $("#thing-with-videos").fitVids();
  });




jQuery(document).ready(function($){

var height_video = $(window).width();
var height_responsive = (height_video / 1.78011) + 1;
$('.video_slide').css("height",height_responsive);



$(window).resize(function() {

var height_video = $(window).width();
var height_responsive = (height_video / 1.78011) + 1;
$('.video_slide').css("height",height_responsive);

});
});

/* ==============================================
Smooth scrolling to anchor 
with offsetting an anchor to adjust for fixed header
=============================================== */

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
&& location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 70 //offsets for fixed header
        }, 1000);
        return false;
      }
    }
  });
  //Executed on page load with URL containing an anchor tag.
  if($(location.href.split("#")[1])) {
      var target = $('#'+location.href.split("#")[1]);
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 70 //offset height of header here too.
        }, 1000);
        return false;
      }
    }
});

  
/* ==============================================
Parallax
=============================================== */
$(document).ready(function(){
	
      $(window).stellar({ 
	  horizontalScrolling: false,
	  responsive: true
	  });
	  
});





/* ==============================================
FlexSlider v2.2.2
=============================================== */
    
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
}); 

/* ==============================================
Contact Form
=============================================== */

jQuery(document).ready(function(){

	$('#contactform').submit(function(){

		var action = $(this).attr('action');

		$("#message").slideUp(750,function() {
		$('#message').hide();

 		$('#submit')
			.after('<img src="img/ajax-loader.gif" class="loader" />')
			.attr('disabled','disabled');

		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			phone: $('#phone').val(),
			comments: $('#comments').val(),
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform').slideUp('slow');

			}
		);

		});

		return false;

	});

});

/* ==============================================
Google Maps
=============================================== */

$("#map").gmap3({
    marker:{     
	address:"Seattle, WA 98195", 
	options:{ icon: "img/marker.png"}},
    map:{
    options:{
	styles: [ {
	stylers: [ { "saturation":-100 }, { "lightness": 0 }, { "gamma": 0.5 }]},
	],
	zoom: 13,
	scrollwheel:false,
	draggable: true }
	}
	});	
	
/* ==============================================
Bootstrap Tooltip.js and Alert.js
=============================================== */

$(function () { $("[data-toggle='tooltip']").tooltip();  

$(".alert").alert()
 
});


/* ==============================================
SmoothScroll (for Mouse Wheel) v1.2.1 
=============================================== */
(function () {
    var defaultOptions = {
        frameRate: 150,
        animationTime: 1200,
        stepSize: 120,
        pulseAlgorithm: !0,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1
    }, options = defaultOptions,
        direction = {
            x: 0,
            y: 0
        }, root = 0 <= document.compatMode.indexOf("CSS") || !document.body ? document.documentElement : document.body,
        que = [],
        pending = !1,
        lastScroll = +new Date;

    function scrollArray(a, b, c, d) {
        d || (d = 1E3);
        directionCheck(b, c);
        if (1 != options.accelerationMax) {
            var e = +new Date - lastScroll;
            e < options.accelerationDelta && (e = (1 + 30 / e) / 2, 1 < e && (e = Math.min(e, options.accelerationMax), b *= e, c *= e));
            lastScroll = +new Date
        }
        que.push({
            x: b,
            y: c,
            lastX: 0 > b ? 0.99 : -0.99,
            lastY: 0 > c ? 0.99 : -0.99,
            start: +new Date
        });
        if (!pending) {
            var q = a === document.body,
                p = function (e) {
                    e = +new Date;
                    for (var h = 0, k = 0, l = 0; l < que.length; l++) {
                        var f = que[l],
                            m = e - f.start,
                            n = m >= options.animationTime,
                            g = n ? 1 : m / options.animationTime;
                        options.pulseAlgorithm && (g = pulse(g));
                        m = f.x * g - f.lastX >> 0;
                        g = f.y * g - f.lastY >> 0;
                        h += m;
                        k += g;
                        f.lastX += m;
                        f.lastY += g;
                        n && (que.splice(l, 1), l--)
                    }
                    q ? window.scrollBy(h, k) : (h && (a.scrollLeft += h), k && (a.scrollTop += k));
                    b || c || (que = []);
                    que.length ? requestFrame(p, a, d / options.frameRate + 1) : pending = !1
                };
            requestFrame(p, a, 0);
            pending = !0
        }
    }

    function wheel(a) {
        var b = overflowingAncestor(a.target);
        if (!b || a.defaultPrevented) return !0;
        var c = a.wheelDeltaX || 0,
            d = a.wheelDeltaY || 0;
        c || d || (d = a.wheelDelta || 0);
        1.2 < Math.abs(c) && (c *= options.stepSize / 120);
        1.2 < Math.abs(d) && (d *= options.stepSize / 120);
        scrollArray(b, -c, -d);
        a.preventDefault()
    }
    var cache = {};
    setInterval(function () {
        cache = {}
    }, 1E4);
    var uniqueID = function () {
        var a = 0;
        return function (b) {
            return b.uniqueID || (b.uniqueID = a++)
        }
    }();

    function setCache(a, b) {
        for (var c = a.length; c--;) cache[uniqueID(a[c])] = b;
        return b
    }

    function overflowingAncestor(a) {
        var b = [],
            c = root.scrollHeight;
        do {
            var d = cache[uniqueID(a)];
            if (d) return setCache(b, d);
            b.push(a);
            if (c === a.scrollHeight) {
                if (root.clientHeight + 10 < c) return setCache(b, document.body)
            } else if (a.clientHeight + 10 < a.scrollHeight && (overflow = getComputedStyle(a, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return setCache(b, a)
        } while (a = a.parentNode)
    }

    function directionCheck(a, b) {
        a = 0 < a ? 1 : -1;
        b = 0 < b ? 1 : -1;
        if (direction.x !== a || direction.y !== b) direction.x = a, direction.y = b, que = [], lastScroll = 0
    }
    var requestFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (a, b, c) {
            window.setTimeout(a, c || 1E3 / 60)
        }
    }();

    function pulse_(a) {
        var b;
        a *= options.pulseScale;
        1 > a ? b = a - (1 - Math.exp(-a)) : (b = Math.exp(-1), a = 1 - Math.exp(-(a - 1)), b += a * (1 - b));
        return b * options.pulseNormalize
    }

    function pulse(a) {
        if (1 <= a) return 1;
        if (0 >= a) return 0;
        1 == options.pulseNormalize && (options.pulseNormalize /= pulse_(1));
        return pulse_(a)
    }
    window.addEventListener("mousewheel", wheel, !1);
})();


/* ==============================================
Backstretch - v2.0.4
=============================================== */
    
$(".home-fullscreen-slider").backstretch([
	"img/designer-desk-full-o.jpg",
	"img/feet-full-o.jpg",
	"img/street-full-o.jpg"
], {
	fade: 900,
	duration: 4500
});
    
