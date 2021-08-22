import '@headlessui/react';
import { useState } from 'react';

function MainForm({ onVideoSelected }) {
    const [videoUrl, setVideoUrl] = useState('');

    const onVideoUrlChange = e => setVideoUrl(e.target.value);
    const startProcessing = () => { onVideoSelected(videoUrl) };

  return (
    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://3.bp.blogspot.com/-yvrV6MUueGg/ToICp0YIDPI/AAAAAAAAADg/SYKg4dWpyC43AAfrDwBTR0VYmYT0QshEgCPcBGAYYCw/s1600/OpenCV_Logo.png"/>
    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Enter YouTube video URL</h1>
      <p class="mb-8 leading-relaxed">It will take a while to process video, after processing youll be able to see the list of detected human faces with corresponding timecodes</p>
      <div class="flex w-full justify-center items-end">
        <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
          <label for="hero-field" class="leading-7 text-sm text-gray-600">URL</label>
          <input type="text" id="hero-field" name="hero-field" value={videoUrl} onChange={onVideoUrlChange} class="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button onClick={startProcessing} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Find faces</button>
      </div>
      <p class="text-sm mt-2 text-gray-500 mb-8 w-full">Powered by OpenCV</p>
    </div>
  </div>
</section>
  );
}

export default MainForm;
