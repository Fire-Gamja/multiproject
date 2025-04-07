import React, { useState } from 'react';
import ReactPlayer from 'react-player';

function TrailerPlayer() {
  const videoUrls = [
    "/s202011190/multiproject/videos/trailer_1.mp4",
    "/s202011190/multiproject/videos/trailer_2.mp4",
    "/s202011190/multiproject/videos/trailer_3.mp4"
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  const handleUnmute = () => {
    setIsMuted(false);
    setHasInteracted(true);
  };

  return (
    <div className="trailer-player" style={{ pointerEvents: 'none' }}>
      <video
        src={videoUrls[currentVideoIndex]}
        loop={true}
        autoPlay
        muted={isMuted}
        playsInline
        onEnded={handleEnded}
        style={{ 
          width: "1080px",
          height: "608px",
          objectFit: 'cover',
        }}
      />
      {!hasInteracted && (
        <button onClick={handleUnmute} className='unmute-btn' style={{ pointerEvents: 'auto' }}>
          Click to Unmute
        </button>
      )}
    </div>
  );
}

export default TrailerPlayer;
