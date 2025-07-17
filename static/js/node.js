const music = document.getElementById('music');
const musicIcon = document.querySelector('.music-icon');
const musicPlayer = document.querySelector('.music-player');
const songpicker = document.getElementById('song');
const songlabel = document.getElementById('song-label');

const green_room_url = 'https://www.youtube.com/embed/GrCp8AHdgEM';
const the_world_revolving = 'https://www.youtube.com/embed/Z01Tsgwe2dQ';
const third_sancuary = 'https://www.youtube.com/embed/7f1RK1m7qvc';
const hip_shop = 'https://www.youtube.com/embed/D83BxptHcRc';

music.addEventListener('load', () => {
    music.style.display = 'none';
    songpicker.style.display = 'none';
    songlabel.style.display = 'none';
});

musicPlayer.addEventListener('mouseover', () => {
    music.style.display = 'block';
    musicIcon.style.display = 'none';
    songpicker.style.display = 'block';
    songlabel.style.display = 'block';
});

musicPlayer.addEventListener('mouseout', () => {
    music.style.display = 'none';
    musicIcon.style.display = 'block';
    songpicker.style.display = 'none';
    songlabel.style.display = 'none';
});

function changeSong() {
    selectedSong = songpicker.value;
    switch (selectedSong) {
        case 'song1':
            music.src = green_room_url;
            break;
        case 'song2':
            music.src = the_world_revolving;
            break;
        case 'song3':
            music.src = third_sancuary;
            break;
        case 'song4':
            music.src = hip_shop;
            break;
    }
}

songpicker.addEventListener('change', changeSong);

function updateiframesize() {
    const maxWidth = 240;
    const maxHeight = 120;

    const newWidth = Math.min(musicPlayer.offsetWidth, maxWidth);
    const newHeight = Math.min(musicPlayer.offsetHeight, maxHeight);

    music.style.width = newWidth + 'px';
    music.style.height = newHeight + 'px';
}


setInterval(updateiframesize, 10);