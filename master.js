let scrollBar = document.querySelector(".scrollBar");
window.onscroll = function () {
  if(this.scrollY >= 400){
    darkLight.classList.add("hidden")
    scrollBar.classList.add('show')
  }else{
    darkLight.classList.remove("hidden")
    scrollBar.classList.remove('show')
  }
};

scrollBar.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

let body = document.querySelector("body");
let darkLight = document.querySelector(".darkLight");

function darkMode () {
  if (localStorage.getItem("mode") === "dark-mode") {
    body.classList.add("dark");
  }
  darkLight.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (!body.classList.contains("dark")) {
      localStorage.setItem("mode", "light-mode");
    } else {
      localStorage.setItem("mode", "dark-mode");
    }
  });
}
darkMode()

let video = document.querySelector(".videos .preview video")
console.log(video);

function changeToVideos (videoSrc) {
  video.src=`Images/videos/video - 0${videoSrc}.mp4`
}


