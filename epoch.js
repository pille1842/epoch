function setTime() {
    var date    = new Date();
    var time    = date.getUTCFullYear() 
                  + '-'
                  + date.getUTCMonth()
                  + '-'
                  + date.getUTCMonth()
                  + '-'
                  + date.getUTCDate()
                  + ' '
                  + date.getUTCHours()
                  + ':'
                  + date.getUTCMinutes()
                  + ':'
                  + date.getUTCSeconds();
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
