// Stop autoplay on youtube page (for Firefox with Greasemonkey/Tampermonkey) 


// For single video page  (comment these lines if need not)
var player = document.getElementsByTagName('VIDEO')[0];
if (player)  player.oncanplay = () => player.pause();


// For user page  (comment these lines if need not)
window.addEventListener("DOMNodeInserted", function (e) {
   if (e.target.tagName == 'VIDEO' && document.querySelector('.branded-page-box VIDEO')) {
      player = e.target;
      player.oncanplay = () => player.pause();
   }
});