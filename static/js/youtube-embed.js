// 1. Read QueryParams
const urlParams = new URLSearchParams(window.location.search);
const urlVideoId = urlParams.get("VIDEO"); // video
const urlTitle = urlParams.get("TITLE"); //title
const urlASIN = urlParams.get("ASIN"); //title
const curtainImg = "https://img.youtube.com/vi/" + urlVideoId + "/0.jpg"; // bkr screenshot
const curtainFrame = document.getElementById("yt-cover");

//Set document title
document.title = "Bronze Player - " + urlTitle;

//Set the product name below video
document.getElementById("ProductName").innerHTML = " - " + urlTitle;

//Set the product link to open amazon
document.getElementById("AmazonLink").href =
  "https://www.amazon.com/dp/" + urlASIN;

document.getElementById("AmazonLink").onclick = function () {
  window.open("https://www.amazon.com/dp/" + urlASIN, "amz", 1280, 700);
};

//Set the curtain image based on youtube thumbnail
curtainFrame.style.backgroundImage = "url('" + curtainImg + "')";

//Cover the youtube player div and then fade it out...
curtainFrame.classList.add("curtain");
console.log("Added Curtain");

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player("ytplayer", {
    width: "960",
    height: "540",
    videoId: urlVideoId,
    events: {
      onReady: onPlayerReady,
      onPlaybackQualityChange: onPlayerPlaybackQualityChange,
      onStateChange: onPlayerStateChange,
    },
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  player.mute(); // comment out if you don't want the auto played video muted
}

//  4.5 Frank - Quality Changes large
//   force high quality video playback
function onPlayerPlaybackQualityChange(event) {
  var playbackQuality = event.target.getPlaybackQuality();
  var suggestedQuality = "large";

  console.log("QUALITY CURRENT: " + playbackQuality);

  if (playbackQuality !== "large") {
    console.log("QUALITY SET TO:  " + suggestedQuality);
    event.target.setPlaybackQuality(suggestedQuality);
  }
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    player.seekTo(0);

    // reset curtain animation
    curtainFrame.style.animation = "none";
    curtainFrame.offsetHeight; /* trigger reflow */
    curtainFrame.style.animation = null;
    console.log("Reset Curtain");

    player.playVideo();
    console.log("Playing Video Again");
  }
}

function stopVideo() {
  player.stopVideo();
}
