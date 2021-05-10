

// function createWanderingDiv() {
//     var img, left, top, counter, interval;

//     img = document.createElement('img');

//     img.src = "1.png";

//     left = 200;
//     top  = 200;
//     img.style.position = "absolute";
//     img.style.left = left + "px";
//     img.style.top = top + "px";
//     img.style.width = "200px";  // Make these match the image...
//     img.style.height = "200px"; // ...or leave them out.

//     img.style.zIndex = 100; // Or whatever

//     document.body.appendChild(img);

//     counter = 50;
//     interval = 200; // ms
//     window.setTimeout(wanderAround, interval);

//     function wanderAround() {

//         --counter;
//         if (counter < 0)
//         {
//             // Done; remove it
//             document.body.removeChild(img);
//         }
//         else
//         {
//             // Animate a bit more
//             left += Math.floor(Math.random() * 20) - 10;
//             if (left < 0)
//             {
//                 left = 0;
//             }
//             top  += Math.floor(Math.random() * 10)  - 5;
//             if (top < 0)
//             {
//                 top = 0;
//             }
//             img.style.left = left + "px";
//             img.style.top  = top  + "px";

//             // Re-trigger ourselves
//             window.setTimeout(wanderAround, interval);
//         }
//     }
// }

// (function($){
//     $.fn.group = function() {
//         console.log(2);
//         setTimeout(showpanel, 5000)
//     }; 
//  });

function group(){
    animateDiv($('.a'));
    animateDiv($('.b'));
    animateDiv($('.c'));
    animateDiv($('.d'));
    animateDiv($('.e'));
    document.getElementById("shift1").style.opacity=1;
    document.getElementById("shift2").style.opacity=1;
    document.getElementById("shift3").style.opacity=1;
    document.getElementById("shift4").style.opacity=1;
    document.getElementById("shift5").style.opacity=1;
}

function peach(){
    animateDiv($('.f'));
    animateDiv($('.g'));
    animateDiv($('.h'));
    animateDiv($('.i'));
    animateDiv($('.j'));
    document.getElementById("second1").style.opacity=1;
    document.getElementById("second2").style.opacity=1;
    document.getElementById("second3").style.opacity=1;
    document.getElementById("second4").style.opacity=1;
    document.getElementById("second5").style.opacity=1;
}




$(document).ready(function() {
        setTimeout(group, 5000);
        setTimeout(peach, 10000);
});

function makeNewPosition($container) {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $container.height() - 50;
    var w = $container.width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv($target) {
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $target.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv($target);
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}