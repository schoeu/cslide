/**
 * Created by baidu on 16/2/17.
 */

// 只描述实现思路
var $waBtn = $('.wa-btn');
var $waSigma = $('.wa-sigma');
$waBtn.on('click', function () {
    $waSigma.toggleClass('wa-fixheight');
});


