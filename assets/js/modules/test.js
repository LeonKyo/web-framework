// Dom ready

var $ = require('../bower_components//jquery/dist/jquery.js');
$(function(module, exports) {
    /*Do the rest stuff involving DOM manipulations*/
    console.log('ready',$.isReady);
    $('h1').css('color', '#ff0000');
}(module, module.exports));
