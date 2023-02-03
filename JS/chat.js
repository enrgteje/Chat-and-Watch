let message = document.getElementById('message');
let messages = document.getElementById('messages');

let videoPlayer = document.getElementById('videoPlayer');
const url = 'https://www.youtube.com/embed/';
let video = document.getElementById('video');

function addMessage() {
  messages.innerHTML += 'User1: ' + message.value + '<br>';
  message.value = '';
}

function playVideo() {
  let videoId = message.value.split('=')[1];
  let videoUrl = url + videoId;
  console.log(videoUrl);
  videoPlayer.src = videoUrl;
  // video.innerHTML = `<iframe
  //   id="videoPlayer"
  //   width="560"
  //   height="315"
  //   src="${url}"
  //   frameborder="0"
  //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //   allowfullscreen
  // ></iframe>`;
}

const messageForm = document.getElementById('messageForm');

messageForm.addEventListener('submit', function (event) {
  event.preventDefault();
  playVideo();
  addMessage();
});
