var title = document.querySelector('.player-title');
var audioPlayer = document.querySelector('.player-audio');
var pochette = document.querySelector('.player-pochetteImg');



//generer mes titres a partir de mon data
for (let i = 0; i < audio.length; i++) {
  title.innerHTML += '<p class="player-titleArtist">' + audio[i].artist + " " + '<span class="player-title">' + audio[i].title + '</span>' + '</p>';
}

var titleItem = document.querySelectorAll('.player-titleArtist');
//assigner les attributs au clic du titre

for (let j = 0; j < titleItem.length; j++) {
  titleItem[j].addEventListener('click', () => {
    pochette.setAttribute('src', audio[j].imgSrc)
    audioPlayer.setAttribute('src', audio[j].audioSrc);
    audioPlayer.play();
  })
}

var play = document.querySelector('.player-play');
var pause = document.querySelector('.player-pause');

play.addEventListener('click', function() {
  audioPlayer.play();
  console.log('heel');
})

pause.addEventListener('click', function() {
  audioPlayer.pause();
  console.log('heel');
})