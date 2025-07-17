const music = document.getElementById('music');
const musicIcon = document.querySelector('.music-icon');
const musicPlayer = document.querySelector('.music-player');

music.addEventListener('load', () => {
    music.style.display = 'none';
});

musicPlayer.addEventListener('mouseover', () => {
    music.style.display = 'block';
    musicIcon.style.display = 'none';
});

musicPlayer.addEventListener('mouseout', () => {
    music.style.display = 'none';
    musicIcon.style.display = 'block';
});

function updateiframesize() {
    const maxWidth = 240;
    const maxHeight = 120;

    const newWidth = Math.min(musicPlayer.offsetWidth, maxWidth);
    const newHeight = Math.min(musicPlayer.offsetHeight, maxHeight);

    music.style.width = newWidth + 'px';
    music.style.height = newHeight + 'px';
}


setInterval(updateiframesize, 10);