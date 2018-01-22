var title = document.querySelector('.title');

for (let i = 0; i < audio.length; i++) {
    var artist = document.createElement('p');
    artist = document.createTextNode(audio[i].artist);
    title.appendChild(artist);
}