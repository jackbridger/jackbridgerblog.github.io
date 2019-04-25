    var i = 0,
        images = ['images/codeatuni11.jpg','images/codeatuni12.jpg','images/codeatuni13.jpg','images/codeatuni14.jpg'],
        speed = 2500,
        moving = true,
        timer = speed;

    const num_images = images.length;

    function changeImg(){
        clearTimeout(timer);
        timer = setTimeout(changeImg,speed);
        if (moving) {
            document.slide.src = images[i];
            i < (num_images -1) ? i++ : i = 0;}
        else
            clearTimeout(timer);
    }

    function nextImg() {
        i++;
        i = i % num_images;
        document.slide.src = images[i];
    }

    function prevImg() {
        if (i > 0)
            i--;
        else
            i = num_images -1;

        document.slide.src = images[i];
    }

    function pausePlay() {
        if (!moving) {
            document.getElementById("pauseslider").innerText = 'Pause'}
        else {
            document.getElementById("pauseslider").innerText = 'Play'
            i--;
        }

        moving = !moving;
        changeImg();
    }

    document.onkeydown = function(e) {
        e = e || window.event;
        if (e.keyCode == '37') {
            prevImg();}
        else if (e.keyCode == '39') {
            nextImg();}
    }


    window.onload = changeImg;