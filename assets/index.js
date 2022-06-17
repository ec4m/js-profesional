import MediaPlayer from './MediaPlayer.js'
import autoPlay from './plugins/autoPlay.js'

const video = document.querySelector('.movie');
const player = new MediaPlayer({ el: video, plugins: [
    //new autoPlay()
] });

const button = document.querySelector('.btn--play');

button.onclick = () => {
    if (player.media.paused) {
        player.play();
    } else {
        player.pause();
    }
    console.log(player.media.paused);
}

const buttonMuted = document.querySelector('.btn--mute');

buttonMuted.onclick = () => {
    if(player.media.muted == true) {
        player.unmute();
    } else {
        player.mute();
    }
}