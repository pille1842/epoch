function setTime() {
    var decimal = (Date.now() / 1000) | 0;
    var binary  = decimal.toString(2);
    var hexadec = decimal.toString(16);
    $('#decimal').html(decimal);
    $('#binary').html(binary);
    $('#hexadec').html(hexadec);
    var delay = setTimeout(setTime, 50);
}

setTime();
