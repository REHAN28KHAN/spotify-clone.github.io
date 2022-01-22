// console.log("welcome Rehan khan")

//intilization of varibles
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay')
let git = document.getElementById('git');
let masterName = document.getElementById('masterName');
let progressBar = document.getElementById('progressBar');
let songitem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Dil Meri Na Sune", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Tera Fitoor", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Hone Laga Hoon", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Pehli Nazar Mein ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Piyo O Re Piyo", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Rang jo lagyo", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Tere Sang Yaara", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Tu Chahiye", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Gulabi Aankhein", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Jaane De", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]
songitem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
// play song
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime < 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        git.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        git.style.opacity = 0;
    }
})
// Listen to Event
audioElement.addEventListener('timeupdate', () => {
    console.log("Upadte Time")
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    progressBar.value = progress;
})
progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
        element.classList.remove("fa-pause-circle")
        element.classList.add("fa-play-circle")
    })

}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle")
        e.target.classList.add("fa-pause-circle")
        audioElement.src=`songs/${songIndex+1}.mp3`
        masterName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        git.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')

    })
})
document.getElementById('next').addEventListener('click',()=>{
 if(songIndex >=9){
    songIndex= 0;
 }else{
     songIndex +=1;
 }
 audioElement.src=`songs/${songIndex+1}.mp3`
 masterName.innerText = songs[songIndex].songName;
 audioElement.currentTime = 0;
 audioElement.play();
 git.style.opacity = 1;
 masterPlay.classList.remove('fa-play-circle')
 masterPlay.classList.add('fa-pause-circle')
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <=0){
       songIndex= 0;
    }else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    masterName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    git.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
   })