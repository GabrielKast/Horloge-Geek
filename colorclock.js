function getPortWidth() {
    var viewportwidth;

    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined')
    {
	viewportwidth = window.innerWidth;
    }

    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)

    else if (typeof document.documentElement != 'undefined'
	     && typeof document.documentElement.clientWidth !=
	     'undefined' && document.documentElement.clientWidth != 0)
    {
	viewportwidth = document.documentElement.clientWidth;
    }

    // older versions of IE
    else
    {
	viewportwidth = document.getElementsByTagName('body')[0].clientWidth;
    }

    return viewportwidth;
}

function getPortHeight() {
    var viewportwidth;

    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined')
    {
	viewportheight = window.innerHeight;
    }

    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)

    else if (typeof document.documentElement != 'undefined'
	     && typeof document.documentElement.clientWidth !=
	     'undefined' && document.documentElement.clientWidth != 0)
    {
	viewportheight = document.documentElement.clientWidth;
    }

    // older versions of IE
    else
    {
	viewportheight = document.getElementsByTagName('body')[0].clientHeight;
    }

    return viewportheight;
}


function updateTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    
    var BB=format_part(s, 60)
    var VV=format_part(m*60+s, 3600)
    var RR=format_part(h * 3600 + m * 60 + s, 3600*24)

    var hexa_clock = RR+VV+BB;
    var hh = format_number(h), 
        mm = format_number(m), 
        ss = format_number(s);

    $('#clock').html("0x"+hexa_clock+"<br /><small>"+hh+":"+mm+":"+ss+"</small>");
    $('body').css('background-color', "#"+hexa_clock);
}
function format_part(n, base) {
    var n_converted = Math.round (256 * n/base);
    var part_hex=n_converted.toString(16).toUpperCase();
    return  (part_hex.length<2)?"0"+part_hex:part_hex;
}
function format_number(n) {
    return  (n < 10)?"0"+n:n;
}


$(document).ready(function() {
    updateTime();
    setInterval("updateTime()", 1000);
});

