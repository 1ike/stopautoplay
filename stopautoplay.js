// Stop autoplay on youtube (for Firefox with Greasemonkey) 


window.addEventListener("DOMNodeInserted", function (e) {
  
   if (e.target.tagName == 'VIDEO') {

    player = e.target;
    
    player.oncanplay = function () {
      setTimeout (function() { 
        player.pause();
      }, 0);
    }
   }

});
