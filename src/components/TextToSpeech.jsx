import React, { useState } from "react";
import { RiSpeakLine, RiSpeakFill } from "react-icons/ri";

const TextToSpeech = ({ handleClick }) => {
  const [isSpeech, setIsSpeech] = useState(false);

  const handleSpeech = () => {
    setIsSpeech(!isSpeech);
  };

  return (
    <div className='max-w-screen-lg mx-auto p-4 bg-transparent backdrop-blur-lg bg-opacity-5 rounded-sm border-white border animate-bounce-boom'>
      <h2 className='text-3xl font-bold text-center text-white mb-6'>
        Text to Speech
      </h2>

      <div className='flex justify-end mb-6 animate-fade-in'>
        <button
          className='relative px-6 py-2 text-white font-semibold rounded-full bg-white bg-opacity-20 hover:scale-105 transition-transform ease-in-out duration-200'
          onClick={handleClick}
        >
          <span className='relative z-10'>Speech To Text</span>
        </button>
      </div>

      <div className='animate-fade-in'>
        <textarea
          name=''
          id=''
          rows={10}
          className='w-full bg-white bg-opacity-20 border-white border rounded-md text-white outline-none p-2'
          placeholder='Write or Paste text here'
        />
      </div>

      <div
        className={`flex justify-center mt-6 ${
          isSpeech ? "animate-pulse" : ""
        }`}
      >
        <button
          className='relative px-6 py-2 text-white font-semibold rounded-full bg-white bg-opacity-20 hover:scale-105 transition-transform ease-in-out duration-200'
          onClick={handleSpeech}
        >
          {isSpeech ? (
            <RiSpeakFill size={30} className='animate-pulse' />
          ) : (
            <RiSpeakLine size={30} />
          )}
        </button>
      </div>
    </div>
  );
};

export default TextToSpeech;
