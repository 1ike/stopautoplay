// ==UserScript==
// @name        YouTube Stop Autoplay
// @namespace   youtube
// @version     0.0.3
// @description Stop autoplay on youtube page (for Firefox with Greasemonkey|Tampermonkey) 
// @include     http*://www.youtube.com/*
// @grant       me
// ==/UserScript==


window.addEventListener("DOMNodeInserted", function (e) {
   if (e.target.tagName == 'VIDEO') {
      player = e.target;
      player.oncanplay = () => player.pause();
   }
});