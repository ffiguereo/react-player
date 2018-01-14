import React from 'react';
import './video.css';

const Video = (props) => (
    <video
        autoPlay={props.autoplay}
        src={props.src}
        ref={props.setRef}
        className="Video"
        onTimeUpdate={props.timeUpdate}
        onLoadedMetadata={props.loadedMetadata}
    />
)

export default Video;