console.log("welcome to spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Kesariya(Bramhastra).mp3", filePaṭh:"songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Deva-Deva(Bramhastra).mp3", filePaṭh:"songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Maiya-Mainu()Jersey.mp3", filePaṭh:"songs/3.mp3", coverPath: "covers/3.jfif"},
    {songName: "Malang(Malang).mp3", filePaṭh:"songs/4.mp3", coverPath: "covers/4.jfif"},
    {songName: "Safar(Jab Harry Met Sejal).mp3", filePaṭh:"songs/5.mp3", coverPath: "covers/5.jpg"}
]
songItems.forEach((element, i)=>{
    // console.log(element, i); 
    element.getElementsByTagName("img")['0'].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")['0'].innerText = songs[i].songName; 
});

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play')
    }
})

// listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')

    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
    })
})