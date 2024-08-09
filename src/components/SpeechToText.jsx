import React, { useState } from "react";
import { HiOutlineMicrophone, HiMiniMicrophone } from "react-icons/hi2";

const SpeechToText = ({ handleClick }) => {
  const [isSpeak, setIsSpeak] = useState(false);

  const handleSpeak = () => {
    setIsSpeak(!isSpeak);
  };

  return (
    <div className='max-w-screen-lg mx-auto p-4 bg-transparent backdrop-blur-lg bg-opacity-5 rounded-sm border-white border animate-bounce-boom'>
      <h2 className='text-3xl font-bold text-center text-white mb-6'>
        Speech To Text
      </h2>

      <div className='flex justify-end mb-6 animate-fade-in'>
        <button
          className='relative px-6 py-2 text-white font-semibold rounded-full bg-white bg-opacity-20 hover:scale-105 transition-all ease-in-out duration-200'
          onClick={handleClick}
        >
          <span className='relative z-10'>Text To Speech</span>
        </button>
      </div>

      <div className='animate-fade-in'>
        <textarea
          name=''
          id=''
          rows={10}
          className='w-full bg-white bg-opacity-20 border-white border rounded-md text-white outline-none p-1'
          placeholder='Text'
          readOnly
        />
      </div>

      <div
        className={`flex justify-center mt-6 ${isSpeak ? "animate-pulse" : ""}`}
      >
        <button
          className='relative px-6 py-2 text-white font-semibold rounded-full bg-white bg-opacity-20 hover:scale-105 transition-all ease-in-out duration-200'
          onClick={handleSpeak}
        >
          {isSpeak ? (
            <HiMiniMicrophone size={30} className='animate-pulse' />
          ) : (
            <HiOutlineMicrophone size={30} />
          )}
        </button>
      </div>
    </div>
  );
};

export default SpeechToText;
