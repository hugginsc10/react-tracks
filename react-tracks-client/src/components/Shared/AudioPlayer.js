import React from "react";
import  ReactPlayer from 'react-player'
const AudioPlayer = ({url}) => (
  <div>
    <ReactPlayer
      url={url}
      height="6vw"
      width="100%"
      controls={true}
    />
  </div>
)
export default AudioPlayer;
