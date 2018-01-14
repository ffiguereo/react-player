import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import VideoPlayer from './pages/containers/video-player';

ReactDOM.render(<VideoPlayer />, document.getElementById('root'));

registerServiceWorker();
