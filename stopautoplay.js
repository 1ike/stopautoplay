// ==UserScript==
// @name        YouTube Stop Autoplay
// @namespace   youtube
// @version     0.0.5
// @description Stop autoplay on youtube page (for Firefox with Greasemonkey|Tampermonkey)
// @include     http*://www.youtube.com/*
// @grant       me
// ==/UserScript==

(function () {
  const target = document.body;

  const observer = new MutationObserver(function (mutations) {

    mutations.forEach(function (mutation) {
      /* // for single video page either
      if (mutation.target.id == 'c4-player' || mutation.target.id == 'movie_player') { */
      if (mutation.target.id == 'c4-player') {
        const player = target.querySelector('video');
        if (player) {
          player.onloadeddata = () => {
            player.pause();
            // player.onloadeddata = null;
          };

          observer.disconnect();
        }
      }
    });
  });

  // конфигурация нашего observer:
  const config = {
    childList: true,
    subtree: true
  };

  // передаём в качестве аргументов целевой элемент и его конфигурацию
  observer.observe(target, config);

  // позже можно остановить наблюдение
  //observer.disconnect();

})();


/*
// Autoplay on fullscreen

(function () {
  const playOnFullscreen = function (event) {
    const fullscreenElement = document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      msFullscreenElement;

    if (fullscreenElement) {
      const player = fullscreenElement.querySelector('video');
      player.play();
    }
  };
  document.addEventListener("fullscreenchange", playOnFullscreen);
  document.addEventListener("mozfullscreenchange", playOnFullscreen);
  document.addEventListener("webkitfullscreenchange", playOnFullscreen);
  document.addEventListener("onmsfullscreenchange", playOnFullscreen);
})();
 */