const audioElement = document.querySelector("audio");
const soundList = document.querySelector("#soundList");
const prevBtn = document.querySelector("#prev");
const playBtn = document.querySelector("#play");
const nextBtn = document.querySelector("#next");

function renderListSound(arr) {
    
    for(let el of arr){
      soundList.innerHTML = "";
      arr.forEach((el, i) => {
        soundList.innerHTML += `<div class="${i !== curentTracksIndex ? "tag" : "curen-tag"}">${arr[i]}</div>`
      })  
    }
    
}

const soundArr = [
  "./sound/Andro.mp3",
  "./sound/HappyNewYear.mp3",
  "./sound/JingleBells.mp3",
  "./sound/Man.mp3",
  "./sound/RumPumPum.mp3",
  "./sound/Smile.mp3"
];
let curentTracksIndex = 0;
audioElement.src = soundArr[curentTracksIndex];
renderListSound(soundArr)


playBtn.onclick = (e) => {
  renderListSound(soundArr); 
  audioElement.paused ? audioElement.play() : audioElement.pause();
  e.target.textContent = audioElement.paused ? "PLAY" : "STOP";
  
};

prevBtn.onclick = () => { 
  curentTracksIndex--;
  if (soundArr[curentTracksIndex]) {
    renderListSound(soundArr);
    audioElement.src = soundArr[curentTracksIndex];
  } else {
    curentTracksIndex = soundArr.length -1;
    renderListSound(soundArr);
    audioElement.src = soundArr.at(-1);
    
  }
  audioElement.play();
  
};

nextBtn.onclick = () => {
    curentTracksIndex++;
    if (soundArr[curentTracksIndex]) {
      renderListSound(soundArr);  
      audioElement.src = soundArr[curentTracksIndex];
    } else {
      curentTracksIndex = 0; 
      renderListSound(soundArr); 
      audioElement.src = soundArr[0];
    }
audioElement.play();
};





console.log(audioElement, "ELEMENT")