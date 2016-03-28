// Stop autoplay on youtube page (for Firefox with Greasemonkey) 


// For single video page
var player = document.getElementsByTagName('VIDEO')[0];
if (player)  player.oncanplay = pauseVideo;


// For user page
window.addEventListener("DOMNodeInserted", function (e) {
   if (e.target.tagName == 'VIDEO') {
      player = e.target;
      player.oncanplay = pauseVideo;
   }
});


function pauseVideo () {
  var self = this;
  setTimeout (function() {
     self.pause();
     self.oncanplay = null;
  }, 0);
}
