//Esse Código carrega a API do Player do YouTube de forma assíncrona
var scriptExterno = document.createElement('script');
scriptExterno.src = "https://www.youtube.com/iframe_api";

var inicioScript = document.getElementsByTagName('script')[0];
inicioScript.parentNode.insertBefore(scriptExterno, inicioScript);

//Esse Código cria o IFrame do Player, incorpora o vídeo e inicia o download do Stream
var playerA, playerB, playerC, playerD;

function onYouTubeIframeAPIReady() {

  playerA = new YT.Player('playerA', {
    videoId: 'QgtoLPPk5Xw',
  });

  playerB = new YT.Player('playerB', {
    videoId: '0NMoPvqaz10',
  });

  playerC = new YT.Player('playerC', {
    videoId: 'UYTPu3CqWo0',
  });

  playerD = new YT.Player('playerD', {
    videoId: 'MgpI6fv26Sk',

  });

}