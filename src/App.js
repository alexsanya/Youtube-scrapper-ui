import '@headlessui/react';
import { useState } from 'react';
import MainForm from './MainForm';
import ProcessingLog from './ProcessingLog';
import ProcessingService from './ProcessingService';

function App() {
  const [events, setEvents] = useState([]);
  const onEvent = e => {
      setEvents(events => [...events, e]);
  }
  const startProcessing = videoUrl => { ProcessingService.process(videoUrl, onEvent) }

  return (
      <>
        <MainForm onVideoSelected={startProcessing} />
        <ProcessingLog events={events}>
        </ProcessingLog>
      </>
  );
}

export default App;
