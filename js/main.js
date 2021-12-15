// Text-Resize - Start here
$(document).ready(function () {
    var originalSize = $('div,ul li,a,h1,h2,h3,h4,h5,h6,p,span,legend,input,.form-control,.btn').css('font-size');
    // reset
    $("#lnkNormal").click(function () {
        $('div,ul li,a,h1,h2,h3,h4,h5,h6,p,span,input,legend,.form-control,.btn').css('font-size', originalSize);
    });
    //Increase
    $('#lnkIncrease').click(function () {
        curSize = parseInt($('div,ul li,a,h1,h2,h3,h4,h5,h6,p,span,legend,input,.form-control,.btn').css('font-size')) + 1;
        if (curSize <= 18)
            $('div,ul li,a,h1,h2,h3,h4,h5,h6,p,span,legend,input,.form-control,.btn').css('font-size', curSize);
    });
    //Decrease
    $('#lnkDecrease').click(function () {
        curSize = parseInt($('div,ul li,a,h1,h2,h3,h4,h5,h6,p,span,legend,input,.form-control,.btn').css('font-size')) - 1;
        if (curSize >= 9)
            $('div,ul li,a,h1,h2,h3,h4,h5,h6,p,span,input,legend,.form-control,.btn').css('font-size', curSize);
    });
});

$(function () {
    var nua = navigator.userAgent
    var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
    if (isAndroid) {
        $('select.form-control').removeClass('form-control').css('width', '100%')
    }
})