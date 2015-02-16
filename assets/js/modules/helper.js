/*module.exports = {
  getURL: function(){
    return window.location.href;
  }
}
*/

var Helper = {};

Helper.getURL = (function() {
     return window.location.href;
})();
module.exports = Helper;
