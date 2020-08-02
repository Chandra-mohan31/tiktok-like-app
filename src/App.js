import React from 'react';

import './App.css';
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
       <Video
           url="/Videos/video2.mp4"
           channel="chand"
           description="hey devs are u ready for the build"
           song="vanthai ayiaaa vanthai ayiaa . . . ."
           likes={200}
           shares={24}
           messages={56}
           

       />
        <Video
           url="/Videos/video2.mp4"
           channel="chand"
           description="hey devs are u ready for the build"
           song="vanthai ayiaaa vanthai ayiaa . . . ."
           likes={200}
           shares={24}
           messages={56}
           

       />
        <Video
           url="/Videos/video2.mp4"
           channel="chand"
           description="hey devs are u ready for the build"
           song="vanthai ayiaaa vanthai ayiaa . . . ."
           likes={200}
           shares={24}
           messages={56}
           

       />
        <Video
           url="/Videos/video1.mp4"
           channel="chand"
           description="hey devs are u ready for the build"
           song="vanthai ayiaaa vanthai ayiaa . . . ."
           likes={200}
           shares={24}
           messages={56}
           

       />
        <Video
           url="/Videos/video2.mp4"
           channel="chand"
           description="hey devs are u ready for the build"
           song="vanthai ayiaaa vanthai ayiaa . . . ."
           likes={200}
           shares={24}
           messages={56}
           

       />
       
      </div>
    </div>
  );
}

export default App;
