import axios from 'axios';
const SERVER_URL = 'wss://youtube-scrapper-server.herokuapp.com/process';
const VIDEO_INFO_URL = 'https://youtube-scrapper-server.herokuapp.com/video-info';

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
