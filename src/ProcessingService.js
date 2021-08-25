import axios from 'axios';
const SERVER_URL = 'ws://localhost:8000/process';
const VIDEO_INFO_URL = 'http://localhost:8000/video-info';

const ProcessingAPI = {
    process: (videoUrl, onMessage) => {
        const socket = new WebSocket(`${SERVER_URL}?video=${videoUrl}`);
        socket.addEventListener('message', event => {
            onMessage(JSON.parse(event.data));
        });
    },
    getVideoInfo: async videoUrl => axios.get(`${VIDEO_INFO_URL}?video_url=${videoUrl}`).then(resp => resp.data)
}

export default ProcessingAPI;
