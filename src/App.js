import '@headlessui/react';
import { useState } from 'react';
import MainForm from './MainForm';
import ProcessingLog from './ProcessingLog';
import ProcessingService from './ProcessingService';
import VideoInfo from './VideoInfo';

function App() {
  const [events, setEvents] = useState([]);
  const [displayForm, setDisplayForm] = useState(true);
  const [showTryAgain, setShowTryAgain] = useState(false);
  const [videoInfo, setVideoInfo] = useState(false);
  const onEvent = e => {
    setEvents(events => [...events, e]);
    if (e.last) {
        setShowTryAgain(true);
    }
  }
  const tryAnother = () => {
      setShowTryAgain(false);
      setEvents([]);
      setDisplayForm(true);
      setVideoInfo(false);
  }
  const startProcessing = async videoUrl => {
    const videoInfo = await ProcessingService.getVideoInfo(videoUrl);
    setVideoInfo(videoInfo);
    ProcessingService.process(videoUrl, onEvent);
    setDisplayForm(false);
  }

  return (
      <>
        { displayForm && <MainForm onVideoSelected={startProcessing} /> }
        { videoInfo && <VideoInfo data={videoInfo} /> }
        <ProcessingLog events={events} />
        {showTryAgain && <button onClick={tryAnother} class="group relative w-1/2 flex justify-center py-2 px-4 mx-auto my-10 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Try with another video</button>}
      </>
  );
}

export default App;
