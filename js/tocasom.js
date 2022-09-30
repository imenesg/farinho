function tocaSom(nomeArquivo)
{
    const som = new Audio(`../audios/${nomeArquivo}.mp3`);
    som.play();
}