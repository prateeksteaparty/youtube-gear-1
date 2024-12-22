import React from "react";
import VideoPlayer from "@/components/VideoPlayer"; 
import { ExtraGrid } from "@/components/VideGrid";
import { AppBar } from "@/components/AppBar";

const NextPage = () => {
  const videoId = "gs8qfL9PNac"; //

  return (
    <div>
        <div>
            <AppBar></AppBar>
        </div>
    <div className="grid grid-cols-12">
      <div className="col-span-9">
        <VideoPlayer videoId={videoId} />
      </div>
      <div className="col-span-3 p-2 pt-0">
        <ExtraGrid />
      </div>
    </div>
    </div>
  );
};

export default NextPage;
