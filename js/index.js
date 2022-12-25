if(localStorage.getItem("userHientai") ){
    let userName=localStorage.getItem("userHientai")
    document.getElementById("userName").innerHTML +=`<span class='nav-a' href='signin.html' >${userName}</span>`
    document.getElementById("userName").innerHTML +=`<span class='nav-a' onclick ="logout()" >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Log out</span>`
}else{
   
    document.getElementById("userName").innerHTML +="<a class='nav-a' href='signin.html' >Login</a>"
}
function logout(){
    localStorage.removeItem("userHientai");
    window.location.reload();
}
const playBtn = document.querySelector(".play"),
    skipForward = document.querySelector(".forward"),
    skipBack = document.querySelector(".back"),
    playRepeat = document.querySelector(".repeat"),
    shuffleOutline = document.querySelector(".shuffle"),

    progressBarContainer = document.querySelector('.progress'),
    progressBar = document.querySelector('.progress-bar'),
    progressHead = document.querySelector('.progress-head'),

    currentTimeHtml = document.querySelector(".current-time"),
    durationHtml = document.querySelector(".duration"),

    img = document.querySelector('.img'),
    title = document.querySelector(".audio-title"),
    song = document.getElementById("song"),
    singer = document.querySelector(".audio-singer");


    let isPlaying = true;
    let indexSong = 0;
    let isRepeat = false;
    const musics  = [
        {
            name: "Hoa Nhip Giang Sinh",
            artist: "MIN",
            cover: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/9/f/c/1/9fc1b248aca6eca9940bd448a07682d9.jpg" ,
            source: "https://zingmp3.vn/bai-hat/Hoa-Nhip-Giang-Sinh-MIN/ZWAFF096.html",
        },
        {
            name: "Waiting For You",
            artist: "MoNo",
            cover: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/7/7/2/e772358978fef8a02eefd34f6a4ca6f3.jpg",
            source: "https://zingmp3.vn/bai-hat/Waiting-For-You-MONO-Onionn/ZZFDAZ89.html",
        },
        {
            name: "Mat Moc",
            artist: "Pham Nguyen Ngoc - VAnh An Nhi ",
            cover: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/3/0/d/e/30de909a49e4b6e2fa888841bc2ca802.jpg",
            source: "https://zingmp3.vn/bai-hat/Mat-Moc-Pham-Nguyen-Ngoc-VAnh-An-Nhi-BMZ/ZZFW8F7B.html",
        },
    ];
    let timer;
    let repeatCount = 0;
    playRepeat.addEventListener("click", function () {
        if (isRepeat) {
          isRepeat = false;
          playRepeat.removeAttribute("style");
        } else {
          isRepeat = true;
          playRepeat.style.color = "#ffb86c";
        }
      });
      skipForward.addEventListener("click",function() {
        changeSong(1);
      });
      skipBack.addEventListener("click",function() {
        changeSong(-1);
      });
      song.addEventListener("ended", handleEndedSong);
      function handleEndedSong (){
        repeatCount++;
        if (isRepeat && repeatCount === 1) {
          // handle repeat song
          isPlaying = true;
          playPause();
        } else {
          changeSong(1);
        }
      }
      function changeSong(dir) {
        if (dir === 1) {
            // next song
            indexSong++;
            if (indexSong >= musics.length) {
              indexSong = 0;
            }
            isPlaying = true;
          } else if (dir === -1) {
            indexSong--;
            if (indexSong < 0) {
              indexSong = musics.length - 1;
            }
            isPlaying = true;
          }
          init(indexSong);
          playPause();
        }
        playBtn.addEventListener("click", playPause);
function playPause() {
  if (isPlaying) {
    img.classList.add("is-playing");
    song.play();
    playBtn.innerHTML = `<ion-icon name="pause-circle"></ion-icon>`;
    isPlaying = false;
    timer = setInterval(displayTimer, 500);
  } else {
    img.classList.remove("is-playing");
    song.pause();
    playBtn.innerHTML = `<ion-icon name="play"></ion-icon>`;
    isPlaying = true;
    clearInterval(timer);
  }
}
      