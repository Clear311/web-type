// $( function() {
//     $( "#about" ).accordion();
//   } );


// $("#about").show();
var headers = $('.division');
var contentAreas = $('.detail-content1').hide();

headers.click(function() {
    var panel = $(this).next();
    var isOpen = panel.is(':visible');
 
    // open or close as necessary
    panel[isOpen? 'slideUp': 'slideDown']()
        // trigger the correct custom event
        .trigger(isOpen? 'hide': 'show');

    // stop the link from causing a pagescroll
    return false;
});
