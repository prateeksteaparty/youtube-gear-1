import React from "react";

const VideoPlayer = ({ videoId }: { videoId: string }) => {
  return (
    <div className="w-full h-0 pb-[56.25%] relative ">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
      />
    </div>
  );
};

export default VideoPlayer;
