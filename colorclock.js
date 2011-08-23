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
    var ms = d.getMilliseconds();
    var geektime = Math.round(65536 * (3600000 * h + 60000 * m + 1000 * s + ms) / (24 * 60 * 60 * 1000));
    var formatted_geektime=format_as_a_geek(geektime);


    var yy = d.getFullYear();
    var mm = d.getMonth();
    var dd = d.getDate();

    var geekdate = Math.round((Date.UTC(yy, mm, dd) - Date.UTC(yy, 0, 1)) / (24 * 60 * 60 * 1000));
    var formatted_geekdate=format_as_a_geek(geekdate);

    var hexall = new String(formatted_geektime+formatted_geekdate);
    console.log(hexall)
    var hexcolor = hexall.substr(hexall.length-6,6);
    var format_to_display=formatted_geekdate+formatted_geektime;

    var hh = format_number(h), 
    mm = format_number(m), 
    ss = format_number(s);

    $('#clock').html("0x"+format_to_display+"<br /><small>"+hh+":"+mm+":"+ss+"</small>");
    // hexall instead of hexcolor
    $('body').css('background-color', "#"+hexcolor);
}
function format_as_a_geek(geekthing) {
    if (geekthing < 0x1000) padding = "0";
    if (geekthing < 0x100) padding = "00";
    if (geekthing < 0x10) padding = "000";
    return padding + geekthing.toString(16).toUpperCase();
}
function format_number(n) {
    return  (n < 10)?"0"+n:n;
}


$(document).ready(function() {
    updateTime();
    setInterval("updateTime()", 650);
});

