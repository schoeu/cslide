/**
 * Created by baidu on 16/2/17.
 */

// 只描述实现思路
var $waBtn = $('.wa-btn');
var $waSigma = $('.wa-sigma');
var sigmaStatus = true;
var aniStyleStr = {};
var $domEle = $('body');
var crtScrollTop = 0;
var $parts = $('.wa-part');
var partsHeight = 0;
var barHeight = 45;
var fixHeight = 400;
var confPar = {
    height: fixHeight + 'px'
};

$parts.height(function (i, e) {
    partsHeight += e;
});

$waBtn.on('click', function () {
    crtScrollTop = $domEle.scrollTop();

    if (sigmaStatus) {
        $parts.slice(1).show().css({
            opacity: 1,
            transform: 'translate3d(0,-15px,0)',
            transition: 'all 1s cubic-bezier(0,0,0.2,1)'
        });
        aniStyleStr = {
            transition: 'all 0.4s cubic-bezier(0,0,0.2,1)',
            height: partsHeight + 'px',
            transform: 'translate3d(0,0,0)'
        };
        // $waSigma.removeClass('wa-fixheight');
        $waSigma.css(aniStyleStr);
    }
    else {
        aniStyleStr = {
            transition: 'all 0.4s cubic-bezier(0,0,0.2,1)',
            height: crtScrollTop + barHeight + 'px',
            transform: 'translate3d(0,0,0)'
        };
        // $waSigma.addClass('wa-fixheight');
        $waSigma.css(aniStyleStr);

        $parts.slice(1).hide().css({
            transform: 'translate3d(0,0,0)',
            opacity: ''
        });
    }

    sigmaStatus = !sigmaStatus;
});

$waSigma.on('webkitTransitionEnd', function () {
    if (sigmaStatus) {
        $waSigma.css({transition: '',height:fixHeight+'px'});
        $domEle.scrollTop(fixHeight - barHeight);
    }
});




