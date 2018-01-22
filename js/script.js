var title = document.querySelector('.player-title');
var audioPlayer = document.querySelector('.player-audio');
var pochette = document.querySelector('.pochette-pochetteImg');

//generer mes titres a partir de mon data
for (let i = 0; i < audio.length; i++) {
    title.innerHTML += '<p class="titleItem">' + audio[i].artist + " " + audio[i].title + '</p>';
}


//assigner l'attribut au clic du titre
var titleItem = document.querySelectorAll('.titleItem');
for (let j = 0; j < titleItem.length; j++) {
    titleItem[j].addEventListener('click', () => {
        for (let i = 0; i < audio.length; i++) {
            audioPlayer.setAttribute('src', audio[j].audioSrc)
        }
    })
}

//assigner les pochette d'albums
for (let j = 0; j < titleItem.length; j++) {
    titleItem[j].addEventListener('click', () => {
        for (let i = 0; i < audio.length; i++) {
            pochette.setAttribute('src', audio[j].imgSrc)
        }
    })
}
