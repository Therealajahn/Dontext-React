import './CSS/style.css';
import VideoPlayer from './Components/VideoPlayer';
import TextEditor from './Components/TextEditor';
import Controls from './Components/Controls';

function App(props) {
  let url;
  function passMuteButtonClicked(target){
   
  }
  return (
    <div className="App">
      <Controls 
      muted={passMuteButtonClicked}/>
      <div className="editor">
            <TextEditor className="text-plate"/>
            <VideoPlayer 
            className="video"
            url={url}
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
