function paddy(n, p, c) {
    var pad_char = typeof c !== 'undefined' ? c : '0';
    var pad = new Array(1 + p).join(pad_char);
    return (pad + n).slice(-pad.length);
}

function setTime() {
    var date    = new Date();
    var time    = date.getUTCFullYear() 
                  + '-'
                  + paddy(date.getUTCMonth() + 1, 2)
                  + '-'
                  + paddy(date.getUTCDate(), 2)
                  + ' '
                  + paddy(date.getUTCHours(), 2)
                  + ':'
                  + paddy(date.getUTCMinutes(), 2)
                  + ':'
                  + paddy(date.getUTCSeconds(), 2);
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
