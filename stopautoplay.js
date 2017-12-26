// ==UserScript==
// @name        YouTube Stop Autoplay
// @namespace   youtube
// @version     0.0.4
// @description Stop autoplay on youtube page (for Firefox with Greasemonkey|Tampermonkey) 
// @include     http*://www.youtube.com/*
// @grant       me
// ==/UserScript==


const target = document.body;

const observer = new MutationObserver(function(mutations) {

    mutations.forEach(function(mutation) {
        if (mutation.target.id == 'movie_player' || mutation.target.id == 'player-container') {

            player = target.querySelector('video');

            player.onloadeddata = () => {
                player.pause();
                player.onloadeddata = null;
            };

            observer.disconnect();
        }
    });
});

// конфигурация нашего observer:
const config = { childList: true, subtree: true };

// передаём в качестве аргументов целевой элемент и его конфигурацию
observer.observe(target, config);

// позже можно остановить наблюдение
//observer.disconnect();
