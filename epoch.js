function setTime() {
    var decimal = (Date.now() / 1000) | 0;
    var binary  = decimal.toString(2);
    $('#decimal').html(decimal);
    $('#binary').html(binary);
    var delay = setTimeout(setTime, 500);
}

setTime();
