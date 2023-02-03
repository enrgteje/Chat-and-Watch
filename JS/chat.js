let message = document.getElementById('message');
let messages = document.getElementById('messages');

let videoPlayer = document.getElementById('videoPlayer');
const url = 'https://www.youtube.com/embed/';
let video = document.getElementById('video');

let command = '';

function addMessage() {
  command = message.value;
  if (command.indexOf('/play', 0) != -1) {
    command = command.split(' ')[1];
    playVideo();
  }
  messages.innerHTML += 'User1: ' + message.value + '<br>';
  message.value = '';
}

function playVideo() {
  let videoId = command.split('=')[1];
  let videoUrl = url + videoId;

  videoPlayer.src = videoUrl;
}

const messageForm = document.getElementById('messageForm');

messageForm.addEventListener('submit', function (event) {
  event.preventDefault();
  addMessage();
});
