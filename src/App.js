import '@headlessui/react';
import MainForm from './MainForm';

function App() {
  const startProcessing = videoUrl => { alert(`Video ${videoUrl} will soon be processed`); }

  return (
      <MainForm onVideoSelected={startProcessing} />
  );
}

export default App;
