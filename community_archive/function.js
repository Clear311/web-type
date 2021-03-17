// $( function() {
//     $( "#about" ).accordion();
//   } );


// $("#about").show();
// var headers = $('.division');
// var contentAreas = $('.detail-content1').hide();

// headers.click(function() {
//     var panel = $(this).next();
//     var isOpen = panel.is(':visible');
 
//     // open or close as necessary
//     panel[isOpen? 'slideUp': 'slideDown']()
//         // trigger the correct custom event
//         .trigger(isOpen? 'hide': 'show');

//     // stop the link from causing a pagescroll
//     return false;
// });

$(document).ready(function() {    
    $('.detail-content1').hide();
    $('.division').click(function(){
            $(this).parent().next()
                   .slideToggle()
                   .siblings('.detail-content1').slideUp();
            return false;
    });
//      $('.close').click(function(){
//          $('#accordion .hide').slideUp();
//      });
 });

 $(document).ready(function() {    
    $('.detail-content2').hide();
    $('.division2').click(function(){
            $(this).parent().next()
                   .slideToggle()
                   .siblings('.detail-content2').slideUp();
            return false;
    });
//      $('.close').click(function(){
//          $('#accordion .hide').slideUp();
//      });
 });

//rotation of elements
$('.element3').on('click', function(){
    var angle = ($('.element3').data('angle') + 360) ||360;
    $(this).css({'transform': 'rotate(' + angle + 'deg)'});
    $('.element3').data('angle', angle);
});

$('.element4').on('click', function(){
    var angle = ($('.element4').data('angle') + 30) ||30;
    $(this).css({'transform': 'rotate(' + angle + 'deg)'});
    $('.element4').data('angle', angle);
});

$('.element1').on('click', function(){
    var $elie = $(".element1"), degree = 0, timer;
    rotate();
    function rotate() {
        
        $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
        $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
        timer = setTimeout(function() {
            ++degree; rotate();
        },5);
    }
    
    // $("input").toggle(function() {
    //     clearTimeout(timer);
    // }, function() {
    //     rotate();
    // });
}); 

$('.element2').on('click', function(){
    var $elie = $(".element2"), degree = 0, timer;
    rotate();
    function rotate() {
        
        $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
        $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
        timer = setTimeout(function() {
            ++degree; rotate();
        },5);
    }
}); 

// $('.element4').on('click', function(){
//     var $elie = $(".element4"), degree = 0, timer;
//     rotate();
//     function rotate() {
        
//         $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
//         $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
//         timer = setTimeout(function() {
//             ++degree; rotate();
//         },5);
//     }
// }); 
