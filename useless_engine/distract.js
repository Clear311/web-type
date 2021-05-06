function createWanderingDiv() {
    var img, left, top, counter, interval;

    img = document.createElement('img');

    img.src = "bird.png";

    left = 200;
    top  = 200;
    img.style.position = "absolute";
    img.style.left = left + "px";
    img.style.top = top + "px";
    img.style.width = "200px";  // Make these match the image...
    img.style.height = "200px"; // ...or leave them out.

    img.style.zIndex = 100; // Or whatever

    document.body.appendChild(img);

    counter = 50;
    interval = 200; // ms
    window.setTimeout(wanderAround, interval);

    function wanderAround() {

        --counter;
        if (counter < 0)
        {
            // Done; remove it
            document.body.removeChild(img);
        }
        else
        {
            // Animate a bit more
            left += Math.floor(Math.random() * 20) - 10;
            if (left < 0)
            {
                left = 0;
            }
            top  += Math.floor(Math.random() * 10)  - 5;
            if (top < 0)
            {
                top = 0;
            }
            img.style.left = left + "px";
            img.style.top  = top  + "px";

            // Re-trigger ourselves
            window.setTimeout(wanderAround, interval);
        }
    }
}