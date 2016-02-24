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
var $waSigmaH = 0;
var confPar = {
    height: fixHeight + 'px'
};

var transParts = $parts.slice(1);
var siblisParts = $('.result').slice(1);

var transitionStr = 'transform .4s cubic-bezier(0,0,0.2,1)';

$parts.height(function (i, e) {
    partsHeight += e;
});

var $waBtn = $('.wa-btn');

// 方案2
$waBtn.on('click', function () {
    crtScrollTop = $domEle.scrollTop();
    $waSigma.css({
        transition: transitionStr
    });
    // 展开
    if (sigmaStatus) {

        transParts.show().css({
            opacity: 1,
            transform: 'translate3d(0,0,0)',
            transition: transitionStr
        });
        siblisParts.push($waBtn[0]);
        siblisParts.css({
            transform: 'translate3d(0,' + partsHeight + 'px,0)',
            transition: transitionStr
        });
        siblisParts.css({
            transform: '',
            transition: ''
        });

        if (!$waSigmaH) {
            $waSigmaH = $waSigma.height();
        }

    }
    // 收起
    else {
        siblisParts.css({
            transform: 'translate3d(0,' + (crtScrollTop+barHeight-$waSigmaH) + 'px,0)',
            transition: transitionStr
        });
        transParts.css({
            opacity: 0.01,
            transform: 'translate3d(0,-15px,0)',
            transition: transitionStr
        });
    }

    sigmaStatus = !sigmaStatus;
});


$waSigma.on('webkitTransitionEnd', function () {
    if (!sigmaStatus) {
        //
    }
    else {
        siblisParts.css({
            transform: 'translate3d(0,0,0)',
            transition: ''
        });

        // $domEle.scrollTop(fixHeight - barHeight);
        transParts.hide();
        window.scrollTo(0,fixHeight - barHeight);

    }
    $waSigma.css({
        transition: ''
    });
});




// 方案1
/*$waBtn.on('click', function () {
    crtScrollTop = $domEle.scrollTop();

    // 展开
    if (sigmaStatus) {
        $parts.slice(1).show().css({
            opacity: 1,
            transform: 'translate3d(0,-15px,0)',
            transition: 'all 1s cubic-bezier(0,0,0.2,1)'
        });
        aniStyleStr = {
            transition: 'opacity 0.4s cubic-bezier(0,0,0.2,1)',
            height: partsHeight + 'px',
            transform: 'translate3d(0,0,0)'
        };
        // $waSigma.removeClass('wa-fixheight');
        $waSigma.css(aniStyleStr);
    }
    // 收起
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
});*/




