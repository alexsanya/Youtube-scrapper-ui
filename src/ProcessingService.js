import axios from 'axios';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const VIDEO_INFO_URL = process.env.REACT_APP_VIDEO_INFO_URL;

const ProcessingAPI = {
    process: (videoUrl, onMessage) => {
        const socket = new WebSocket(`${SERVER_URL}?video=${videoUrl}`);
        socket.addEventListener('message', event => {
            onMessage(JSON.parse(event.data));
        });
    },
    getVideoInfo: async videoUrl => {
        console.log(VIDEO_INFO_URL);
        return axios.get(`${VIDEO_INFO_URL}?video_url=${videoUrl}`).then(resp => resp.data)
    }
}

export default ProcessingAPI;
