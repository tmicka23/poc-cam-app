import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [playing, setPlaying] = useState(false);

  const HEIGHT = 500;
  const WIDTH = 500;

  const startPlaying = () => {
    setPlaying(true);
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementById("videoFeed");
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.error(err)
    );
  };

  const stopPlaying = () => {
    setPlaying(false);
    let video = document.querySelector("#videoFeed");
    video.srcObject.getTracks()[0].stop();
  };
  return (
    <div className="app">
      <div className="app__container">
        <video height={HEIGHT} width={WIDTH} autoPlay muted id="videoFeed" />
      </div>
      <div className="app__input">
        {playing ? (
          <button onClick={stopPlaying}>Stop</button>
        ) : (
          <button onClick={startPlaying}>Start</button>
        )}
      </div>

      <br />
      <input type="file" accept="images/*" capture />
      <input type="file" accept="images/*" capture="user" />
      <input type="file" accept="images/*" capture="environment" />
    </div>
  );
};

export default App;
