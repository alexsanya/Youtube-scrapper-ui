const SERVER_URL = 'ws://localhost:8000/process';

const ProcessingAPI = {
    process: (videoUrl, onMessage) => {
        const socket = new WebSocket(`${SERVER_URL}?video=${videoUrl}`);
        socket.addEventListener('message', event => {
            onMessage(JSON.parse(event.data));
        });
    }
}

export default ProcessingAPI;
