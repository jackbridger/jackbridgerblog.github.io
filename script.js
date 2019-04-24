    var img_displayed = 0,
        images = ['images/codeatuni11.jpg','images/codeatuni12.jpg','images/codeatuni13.jpg','images/codeatuni14.jpg'],
        speed_image_carousel = 4000,
        carousel_moving = true,
        timer = speed_image_carousel;

    const num_images = images.length;

    function changeImg(){
        clearTimeout(timer);
        timer = setTimeout(changeImg,speed_image_carousel);
        if (carousel_moving) {
            document.slide.src = images[img_displayed];
            img_displayed < (num_images -1) ? img_displayed++ : img_displayed = 0;}
        else
            clearTimeout(timer);
    }

    function nextImg() {
        img_displayed++;
        img_displayed = img_displayed % num_images;
        document.slide.src = images[i];
    }

    function prevImg() {
        if (img_displayed > 0)
            img_displayed--;
        else
            img_displayed = num_images -1;
        document.slide.src = images[img_displayed];
    }

    function pausePlay() {
        if (!moving) {
            document.getElementById("pauseslider").innerText = 'Pause'}
        else {
            document.getElementById("pauseslider").innerText = 'Play'
            img_displayed--;
        }

        moving = !moving;
        changeImg();
    }

    document.onkeydown = function(e) {
    switch (event.keyCode) {
    case 37:
        prevImg();
    case 39:
        nextImg();
    }}


    window.onload = changeImg;