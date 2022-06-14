function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this.initPlugins();
}

MediaPlayer.prototype.initPlugins = function() {
    this.plugins.forEach((plugin) => {
        plugin.run(this);
    });
}

MediaPlayer.prototype.play = function() {
    this.media.play();
};
MediaPlayer.prototype.pause = function() {
    this.media.pause();
};

MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function() {
    this.media.muted = false;
}

export default MediaPlayer;