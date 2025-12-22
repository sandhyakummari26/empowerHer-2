import React, { useRef, useState } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const videos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const playVideo = () => videoRef.current.play();
  const pauseVideo = () => videoRef.current.pause();
  const forwardVideo = () => (videoRef.current.currentTime += 5);
  const rewindVideo = () => (videoRef.current.currentTime -= 5);

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const previousVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Video Player Using useRef</h2>

      <video
        ref={videoRef}
        width="600"
        src={videos[currentVideoIndex]}
      />

      <div>
        <button onClick={playVideo}>▶ Play</button>
        <button onClick={pauseVideo}>⏸ Pause</button>
        <button onClick={rewindVideo}>⏪ Rewind 5s</button>
        <button onClick={forwardVideo}>⏩ Forward 5s</button>
      </div>

      <div>
        <button onClick={previousVideo}>⏮ Previous</button>
        <button onClick={nextVideo}>⏭ Next</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
