import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bronze Video Player</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="//vjs.zencdn.net/8.3.0/video.min.js"></script>
      </Head>

      <section id="section-video-1" class="section section--video">
        <h1 class="video__title">
          Youtube video with videoJS and custom controller
        </h1>
        <div class="video__player">
          <div class="video__overlay"></div>
          <video
            id="video-element-1"
            class="video-js vjs-default-skin player__video"
            autoplay
            loop
            muted
            playsinline
            preload="auto"
            width="1000px"
            height="640px"
            data-setup='{"techOrder": ["youtube"], "sources": [{"type": "video/youtube", "src": "https://www.youtube.com/watch?v=ZNskBxLVOfs"}]}'
          ></video>

          <div class="player__controls">
            <button class="btnPlayPause play" title="play" accesskey="P">
              Play
            </button>
            <div class="controls__progress-bar-container">
              <progress
                class="progress-bar controls__progress-bar"
                min="0"
                max="100"
                value="0"
              >
                0% played
              </progress>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
