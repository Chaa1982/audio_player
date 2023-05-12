const audioElement = document.querySelector("audio");
const soundList = document.querySelector("#soundList");
const prevBtn = document.querySelector("#prev");
const playBtn = document.querySelector("#play");
const nextBtn = document.querySelector("#next");

function renderListSound(arr) {
  for(let el of arr){
    soundList.innerHTML = "";
    arr.forEach((el, i) => {
      soundList.innerHTML += `<div class="${i !== curentTracksIndex ? "tag" : "curen-tag"}">${Object.keys(arr[i])[0] }</div>`
    })  
  }
  return this;
}

const soundArr = [
  {Andro: "./sound/Andro.mp3"},
  {"Happy New Year": "./sound/HappyNewYear.mp3"},
  {"Jingle Bells": "./sound/JingleBells.mp3"},
  {Man: "./sound/Man.mp3"},
  {"Rum Pum Pum": "./sound/RumPumPum.mp3"},
  {Smile: "./sound/Smile.mp3"},
];
let curentTracksIndex = 0;
audioElement.src = Object.values(soundArr[curentTracksIndex]) ;
renderListSound(soundArr);


playBtn.onclick = (e) => {
  renderListSound(soundArr); 
  audioElement.paused ? audioElement.play() : audioElement.pause();
  e.target.textContent = audioElement.paused ? "PLAY" : "STOP";
  
};

prevBtn.onclick = () => { 
  curentTracksIndex--;
  if (soundArr[curentTracksIndex]) {
    renderListSound(soundArr);
    audioElement.src = Object.values(soundArr[curentTracksIndex]);
  } else {
    curentTracksIndex =  soundArr.length-1;
    renderListSound(soundArr);
    audioElement.src = Object.values(soundArr[curentTracksIndex]);
    
  }
  audioElement.play();
  
};

nextBtn.onclick = () => {
    curentTracksIndex++;
    if (soundArr[curentTracksIndex]) {
      renderListSound(soundArr);  
      audioElement.src = Object.values(soundArr[curentTracksIndex]);
    } else {
      curentTracksIndex = 0; 
      renderListSound(soundArr); 
      audioElement.src = Object.values(soundArr[curentTracksIndex]);
    }
audioElement.play();
};

console.log(audioElement, "ELEMENT")