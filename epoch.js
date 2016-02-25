function setTime() {
    var time = Date.now();
    $('#decimal').html(time);
    var delay = setTimeout(setTime, 500);
}

setTime();
