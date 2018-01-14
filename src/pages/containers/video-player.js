import React, { Component } from 'react';
import PlayerLayout from '../components/player-layout';
import Video from '../../player/containers/video-player';

class VideoPlayer extends Component {
    render() {
        return (
            <PlayerLayout>
                <Video
                    title="Big Buck Bunny"
                    autoplay={true}
                    src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                />
            </PlayerLayout>
        )
    }
}

export default VideoPlayer;