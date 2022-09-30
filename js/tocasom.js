function tocaSom(botaoClicado) {
    audios = document.querySelectorAll('audio')
    audios.forEach(audio => {
        audio.pause()
        if (audios.length) {
            audio.currentTime = 0
        }
    })
    console.log(botaoClicado);
    const som = botaoClicado.querySelector("audio");
    console.log(som);
    som.play();
}