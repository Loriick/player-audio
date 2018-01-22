var title = document.querySelector('.player-title');
var audioPlayer = document.querySelector('.player-audio');
var pochette = document.querySelector('.player-pochetteImg');
var playPause = document.querySelector('.player-audioPlayPause');



//generer mes titres a partir de mon data
for (let i = 0; i < audio.length; i++) {


    title.innerHTML += '<div class="player-titleContainer"> <img class="player-miniature" src="' + audio[i].imgSrc + '"/> <p class="player-titleArtist">' + audio[i].artist + "<br/>" + '<span class="player-titleTitle">' + audio[i].title + '</span> </p> </div>';
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


