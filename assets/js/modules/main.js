/*
var jQuery = require('../bower_components//jquery/dist/jquery.js');
var Helper = require('./helper.js');
*/

(function($, window) {
    console.log('from Hello:'+ window);
    console.log('first',$.isReady);

  // Dom ready
  $(function() {
      /*Do the rest stuff involving DOM manipulations*/
      console.log('ready',$.isReady);
      console.log(Helper);
  });

})(jQuery, window);
