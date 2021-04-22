$(document).ready(function () {

    console.log('script loaded');

    const wghtmax = 900;
    const wdthmax = 150;

    //standard sliders
    $('.axis-range').on('input', function () {

        let value = parseInt($(this).val()); //get slider input value
        // console.log(value);

        const slidertype = $(this).data('type'); //get slider axis

        // console.log("--"+slidertype, value );

        $('.tester').css("--" + slidertype, value);

    });

    $('#size').on('input', function () {

        let sizeValue = parseInt($(this).val()); //get slider input value
        console.log(sizeValue);
        $('.tester').css('font-size', sizeValue + 'px');

    });


    $('#lineheight').on('input', function () {

        let leadingValue = $(this).val(); //get slider input value
        console.log(leadingValue);
        $('.tester').css('line-height', leadingValue);

    });

});


//click to feed//
//declare initial variable as 0 (the recipe!)
var a = 0;

//each time we click our text, variable 'a' will increase by 1
document.getElementById("text").onclick = function () {
    a++;
}
//wrapping everything else around this checkValue() function which checks every .05 seconds if anything has changed
function checkValue() {
    //at initial value, does nothing
    if (a === 0) {
        //when 'a' changes to 1 after a click, add class '.animate' to our text which changes the font-variation-settings
    } else if (a === 1) {
        var classAdd = document.getElementById("text");
        classAdd.className += " animate";
        //if a is neither 0 or 1, add 'animate2' class (doing the same thing as above but with different animation keyframe values)
    } else {
        var classAdd = document.getElementById("text");
        classAdd.className += " animate2";
    }
    //checks if the value of variable a changed every 0.05 seconds with .setTimeout.
    window.setTimeout(checkValue, 50);
}
//Finally, we run the function we just declared
checkValue();


