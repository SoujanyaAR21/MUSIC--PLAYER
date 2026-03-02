//This section selects all required HTML elements for the music player
const audioPlayer = document.getElementById('audioPlayer');
const playPauseButton = document.getElementById('playPauseButton');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const trackNameElement = document.getElementById('trackName');
const imageElement = document.getElementById('image');
const volumeControl = document.getElementById('volumeControl');

const audioFiles = [
    {name:'EEGA Nene Ne audio Song',
     src:'music/EEGA  Nene Nani Ne Video Song.mp3', 
     img:'image/eega.jpg'
    },
     {name:'Love Mocktail - Neene Yendigu',
     src:'music/Love Mocktail - Neene Yendigu (Video Song)  Krishna, Milana  Raghu Dixit  Raghavendra Kamath.mp3', 
     img:'image/love_Mocktail.jpg'
    },
    {name:'Olave Olave - Lyrical  SSE (Side B)g',
     src:'music/Olave Olave - Lyrical  SSE (Side B)  Rakshit Shetty, Rukmini  Charan RajHemanth MRao.mp3',
     img:'image/saptha.jpg'
    },
    {name:'Ranjha  Official Video  Shershaah g',
     src:'music/Ranjha  Official Video  Shershaah  SidharthKiara  B Praak  Jasleen Royal  Romy  Anvita Dutt.mp3',
     img:'image/shershaah.jpg'
    },
];

let currentTrack = 0;
let isPlaying = false;

function loadTrack(index){
    audioPlayer.src = audioFiles[index].src;
    trackNameElement.textContent = audioFiles[index].name;
    imageElement.src = audioFiles[index].img;

    if (isPlaying) {
        audioPlayer.play();
    }
}

