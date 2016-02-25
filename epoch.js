function setTime() {
    var date    = new Date();
    var time    = date.toISOString();
    var decimal = (date.getTime() / 1000) | 0;
    var binary  = decimal.toString(2);
    var hexadec = decimal.toString(16);
    $('#time').html(time);
    $('#decimal').html(decimal);
    $('#binary').html(binary);
    $('#hexadec').html(hexadec);
    var delay = setTimeout(setTime, 50);
}

setTime();
