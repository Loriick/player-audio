var title = document.querySelector('.player-title');
var audioPlayer = document.querySelector('.player-audio');
var pochette = document.querySelector('.player-pochetteImg');
var playBtn = document.querySelector('.player-playPause');
var previousBtn = document.querySelector('.player-previous');
var nextBtn = document.querySelector('.player-next');
var currentTrack = 0;



const playPause = () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.setAttribute('src', 'img/pause.png');
    } else {
        audioPlayer.pause();
        playBtn.setAttribute('src', 'img/play.png')
    }
};


//generer mes titres a partir de mon data
for (let i = 0; i < audio.length; i++) {
    title.innerHTML += '<div class="player-titleContainer"> <img class="player-miniature" src="' +
        audio[i].imgSrc + '"/> <p class="player-titleArtist">' + audio[i].artist + "<br/>" +
        '<span class="player-titleTitle">' + audio[i].title + '</span> </p> </div>';
}

var titleItem = document.querySelectorAll('.player-titleArtist');
//assigner les attributs au clic du titre

for (let j = 0; j < titleItem.length; j++) {
    titleItem[j].addEventListener('click', () => {
        pochette.setAttribute('src', audio[j].imgSrc)
        audioPlayer.setAttribute('src', audio[j].audioSrc);
        currentTrack = j;

        playPause();
    })
}

//boutton play/pause
playBtn.addEventListener('click', playPause, false);

//previous btn
previousBtn.addEventListener('click', () => {
    if (currentTrack > 0) {
        currentTrack -= 1
        console.log(currentTrack);
        pochette.setAttribute('src', audio[currentTrack].imgSrc)
        audioPlayer.setAttribute('src', audio[currentTrack].audioSrc);
        playPause();
    }
});

//next btn 
nextBtn.addEventListener('click', () => {
    if (currentTrack < audio.length - 1) {
        currentTrack += 1
        console.log(currentTrack);
        pochette.setAttribute('src', audio[currentTrack].imgSrc)
        audioPlayer.setAttribute('src', audio[currentTrack].audioSrc);
        playPause();
    }
});



