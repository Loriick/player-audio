var title = document.querySelector('.player-title');
var audioPlayer = document.querySelector('.player-audio');
var pochette = document.querySelector('.player-pochetteImg');
var playBtn = document.querySelector('.player-playPause');
var previousBtn = document.querySelector('.player-previous');
var nextBtn = document.querySelector('.player-next');
var currentTrack = 0;

var muteBtn = document.querySelector('.player-mute');


var canvas = document.querySelector('.player-canvas');
var timeline = document.querySelector('.player-range');
var currentTime = document.querySelector('.player-currentTime');
var durationTime = document.querySelector('.player-duration');



const playPause = () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playBtn.setAttribute('src', 'img/pause.png');
  } else {
    audioPlayer.pause();
    playBtn.setAttribute('src', 'img/play.png')
  }
};

const timeConvert = timer => {
    mins = Math.floor((timer % 3600) / 60)
    secs = Math.floor(timer % 60);
    if (secs < 10) {
        secs = "0" + secs
    }
    return mins + ":" + secs;
}


const muteSound = () => {
  if (audioPlayer.muted === true) {
    audioPlayer.muted = true;
    muteBtn.setAttribute('src', 'img/mute.png');
  } else {
    audioPlayer.muted = false;
    muteBtn.setAttribute('src', 'img/sound.png');
  }
}

//generer mes titres a partir de mon data
for (let i = 0; i < audio.length; i++) {
  title.innerHTML += '<div class="player-titleContainer"> <div class="player-miniatureContainer"><img class="player-miniature" src="' +
    audio[i].imgSrc + '"/></div> <p class="player-titleArtist">' + audio[i].artist + "<br/>" +
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


//boutton mute/Sound

muteBtn.addEventListener('click', function() {
  if (audioPlayer.muted === false) {
    audioPlayer.muted = true;
    muteBtn.setAttribute('src', 'img/mute.png');
  } else {
    audioPlayer.muted = false;
    muteBtn.setAttribute('src', 'img/sound.png');
  }
});
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


for (let i = 0; i < titleItem.length; i++) {

  titleItem[i].addEventListener('click', function() {
    for (var a = 0; a < titleItem.length; a++) {
      titleItem[a].classList.remove('selected');
    }
    titleItem[i].classList.add('selected');
  });
};

    titleItem[i].addEventListener('click', function () {
        for (var a = 0; a < titleItem.length; a++) {
            titleItem[a].classList.remove('selected');
        }
        titleItem[i].classList.add('selected');
    });
};

//barre de progression avec un canvas
audioPlayer.addEventListener("timeupdate", progressBar, true)
function progressBar() {
    var elapsedTime = Math.round(audioPlayer.currentTime);
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        ctx.fillStyle = "rgb(255, 140, 97)";
        var fWidth = (elapsedTime / audioPlayer.duration) * (canvas.clientWidth);
        if (fWidth > 0) {
            ctx.fillRect(0, 0, fWidth, canvas.clientHeight);
        }
    }
}

// clique sur la barre de progresssion 
canvas.addEventListener("click", e => {
    if (!e) {
        e = window.event;
    }
    try {
        audioPlayer.currentTime = audioPlayer.duration * (e.offsetX / canvas.clientWidth);
    }
    catch (err) {
        if (window.console && console.error("Error:" + err));
    }
}, true);


//temps en cours
audioPlayer.addEventListener('timeupdate', () => {
    currentTime.innerHTML = timeConvert(audioPlayer.currentTime);
});

//durée du morçeau
audioPlayer.addEventListener("loadeddata", () => {
    durationTime.innerHTML = timeConvert(audioPlayer.duration);
})


