import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import Controls from '../components/controls';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import ProgressBar from '../components/progress-bar';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

class VideoPlayer extends Component {
    state = {
        pause: false,
        duration: 0,
        duration_: 0,
        currentTime: 0,
        currentTime_: 0,
    }

    componentDidMount() {
        this.handleSetFullScreen();
        this.setState({
            pause: (!this.props.autoplay)
        })
    }

    handleLoadedMetadata = (event) => {
        const duration = this.formattedTime(this.video.duration);
        this.setState({
            duration,
            duration_: this.video.duration,
        });
    }

    togglePlay = () => {
        const pause = !this.state.pause;

        this.setState({ pause });

        pause ? this.video.pause() : this.video.play();
    }

    handleTimeUpdate = (event) => {
        const currentTime = this.formattedTime(this.video.currentTime);
        this.setState({
            currentTime,
            currentTime_: this.video.currentTime
        });
    }

    handleProgressBarChange = (event) => {
        this.video.currentTime = event.target.value;
    }

    handleVolumeChange = (event) => {
        this.video.volume = event.target.value;
    }

    handleFullScreen = (event) => {
        if (!this.handleCheckFullScreen()) {
            this.player.requestFullscreen()
        } else {
            document.exitFullscreen();
        }
    }

    handleCheckFullScreen = () => {
        return document.fullscreen || document.webkitIsFullScreen ||document.mozFullScreen;
    }

    handleSetFullScreen = () => {
        document.exitFullscreen =   document.exitFullscreen ||
                                    document.mozCancelFullScreen ||
                                    document.webkitExitFullscreen ;
    }

    refPlayer = (element) => {
        this.player = element;

        this.player.requestFullscreen = this.player.requestFullscreen ||
                                        this.player.mozRequestFullScreen ||
                                        this.player.webkitRequestFullscreen ||
                                        this.player.msRequestFullscreen;
    }

    refVideo = (element) => {
        this.video = element;
    }

    formattedTime(secs) {
        const pad = '00';
        const minutes = parseInt(secs / 60, 10);
        let seconds = parseInt(secs % 60, 10);
        seconds = pad.substring(0, pad.length - seconds.toString().length) + seconds.toString();
        return `${minutes} : ${seconds}`
    }
    render() {
        return (
            <VideoPlayerLayout setRef={this.refPlayer} >
                <Title title={this.props.title} />
                <Controls>
                    <PlayPause
                        pause={this.state.pause}
                        handleClick={this.togglePlay}
                    />
                    <Timer
                        duration={this.state.duration}
                        currentTime={this.state.currentTime}
                    />
                    <ProgressBar
                        value={this.state.currentTime_}
                        max={this.state.duration_}
                        onChange={this.handleProgressBarChange}
                    />
                    <Volume
                        onChange={this.handleVolumeChange}
                    />
                    <FullScreen
                        onClick={this.handleFullScreen}
                    />
                </Controls>
                <Video
                    autoplay={this.props.autoplay}
                    src={this.props.src}
                    setRef={this.refVideo}
                    timeUpdate={this.handleTimeUpdate}
                    loadedMetadata={this.handleLoadedMetadata}
                />
            </VideoPlayerLayout>
        )
    }
}

VideoPlayer.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    autoplay: PropTypes.bool,
}

export default VideoPlayer;