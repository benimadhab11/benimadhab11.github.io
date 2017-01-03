var count=1;
var sheet="assets/css/style";
$(document).ready(function() {
function timer(){
  var finalsheet = sheet+count+".css";
  console.log(finalsheet);
  document.getElementById('theme-style').setAttribute('href', finalsheet);
  if(count==17) count=0;
  count=count+1;
  setTimeout(timer, 1000);
}
//timer();


// setTimeout(function(){
//
//   console.log(count);
//   count++;
//   // for(var i=2;i<6;i++){
//   //
//   // var finalsheet = sheet+i+".css";
//   // console.log(finalsheet);
//   // document.getElementById('theme-style').setAttribute('href', finalsheet );
//   // }
// }, 1000);


    /* ======= Scrollspy ======= */
   $('body').scrollspy({ target: '#page-nav-wrapper', offset: 100});

    /* ======= ScrollTo ======= */
    $('.scrollto').on('click', function(e){

        //store hash
        var target = this.hash;

        e.preventDefault();

		$('body').scrollTo(target, 800, {offset: -60, 'axis':'y'});

	});

	/* ======= Fixed page nav when scrolled ======= */
    $(window).on('scroll resize load', function() {

        $('#page-nav-wrapper').removeClass('fixed');

         var scrollTop = $(this).scrollTop();
         var topDistance = $('#page-nav-wrapper').offset().top;

         if ( (topDistance) > scrollTop ) {
            $('#page-nav-wrapper').removeClass('fixed');
            $('body').removeClass('sticky-page-nav');
         }
         else {
            $('#page-nav-wrapper').addClass('fixed');
            $('body').addClass('sticky-page-nav');
         }

    });

    /* ======= Chart ========= */

    $('.chart').easyPieChart({
		barColor:'#00BCD4',//Pie chart colour
		trackColor: '#e8e8e8',
		scaleColor: false,
		lineWidth : 5,
		animate: 2000,
		onStep: function(from, to, percent) {
			$(this.el).find('span').text(Math.round(percent));
		}
	});



    /* ======= Isotope plugin ======= */
    /* Ref: http://isotope.metafizzy.co/ */
    // init Isotope
    var $container = $('.isotope');

    $container.imagesLoaded(function () {
        $('.isotope').isotope({
            itemSelector: '.item'
        });
    });

    // filter items on click
    $('#filters').on( 'click', '.type', function() {
      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.filters').each( function( i, typeGroup ) {
        var $typeGroup = $( typeGroup );
        $typeGroup.on( 'click', '.type', function() {
          $typeGroup.find('.active').removeClass('active');
          $( this ).addClass('active');
        });
    });


});
