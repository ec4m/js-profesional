import MediaPlayer from './MediaPlayer.js'

const video = document.querySelector('.movie');
const player = new MediaPlayer({ el: video });

const button = document.querySelector('.btn-play');

button.onclick = () => {
    if (player.media.paused) {
        player.play();
    } else {
        player.pause();
    }
    console.log(player.media.paused);
}