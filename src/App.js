import './CSS/style.css';
import VideoPlayer from './Components/VideoPlayer';
import TextEditor from './Components/TextEditor';
import leavesVideo from './Video/leaves(edited).mp4';

function App() {
  return (
    <div className="App">
      <input type="file" id="file-reader"/>
      <button id="save-button">Save File</button>
      <button id="play-button">Play Video</button>
      <button id="mute-button">Mute Video</button>
      <input type="text" id="video-embed"/>
      <button id="change-video">Change Video</button>
      <div id="editor">
            <TextEditor className="text-plate"/>
            <VideoPlayer 
            className="video"
            url={leavesVideo}
            playing={true}
            loop={true}
            muted={true}
            width="80vw"
            height="100vh"
            />
      </div>      
     </div>
  );
}

export default App;
