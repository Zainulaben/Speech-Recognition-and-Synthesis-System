import React, { useState } from "react";
import TextToSpeech from "./components/TextToSpeech";
import "./App.css";
import SpeechToText from "./components/SpeechToText";

const App = () => {
  const [textToSpeech, setTextToSpeech] = useState(
    JSON.parse(localStorage.getItem("check"))
  );

  const handleChange = (value) => {
    localStorage.setItem("check", JSON.stringify(value));
    setTextToSpeech(value);
  };

  return (
    <div className='bg-[url(/img6.png)] bg-cover bg-no-repeat bg-center min-h-screen py-10 font-primary'>
      {textToSpeech ? (
        <TextToSpeech handleClick={() => handleChange(false)} />
      ) : (
        <SpeechToText handleClick={() => handleChange(true)} />
      )}
    </div>
  );
};

export default App;
