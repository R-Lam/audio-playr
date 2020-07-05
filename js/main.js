var sound = new Howl({
    src: ['https://rcn.radioonlinehd.net:8020/globo989'],
    html5: true,
    autoplay: true,
    volume: 0.5,
    format: ['mp3', 'aac'],
    onend: function() {
        console.log('Finished!');
    }
  });

function stop() {
    sound.stop();
}
function resume() {
    sound.play();
}
function silence() {
    sound.volume([0.0]);
}