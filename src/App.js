//////////////     App     ////////////////////////////

import './CSS/style.css';
import VideoPlayer from './Components/VideoPlayer';
import TextEditor from './Components/TextEditor';
import Controls from './Components/Controls';
import React, {useState} from 'react';
function App(props) {
  const [state, setState] = useState({newVideoURL: '',})
  function saveButtonClickedToApp(saveButtonClicked){ 
    function saveFile(data, filename, type) {
      let file = new Blob([data], {type: type});
      if (window.navigator.msSaveOrOpenBlob) 
          window.navigator.msSaveOrOpenBlob(file, filename);
      else { 
          let a = document.createElement('a'), url = URL.createObjectURL(file);
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          setTimeout(function() {
              document.body.removeChild(a);
              window.URL.revokeObjectURL(url);  
          }, 0); 
      }
    //if(saveButtonClicked)saveFile(url); 
  }
  }
  function playButtonClickedToApp(target){
    console.log('playButtonClickedToApp', target);
  };
  function muteButtonClickedToApp(target){
    console.log('muteButtonClickedToApp', target)
  };
  function videoURLToApp(videoURLfromInput){
    console.log('videoURLToApp in App', videoURLfromInput);
    setState({...state,newVideoURL: videoURLfromInput});  
  };
  function disappearEditor(){
	console.log('disappearEditor');
  }
  return (
    <div className="App">
      <Controls
      saveClicked={saveButtonClickedToApp}
      playClicked={playButtonClickedToApp}
      muteClicked={muteButtonClickedToApp}
      videoURLToApp={videoURLToApp}	  
      />
      <section className="main">
            <TextEditor 
	  	className="text-plate"
	  	//style={textEditorStyle}
	  />
            <VideoPlayer 
            	className="video"
            	newVideoURL={state.newVideoURL}
            	playing={true}
            	loop={true}
            	muted={true}
            	width="80vw"
            	height="100vh"
	        disappearEditor={disappearEditor}
            />
      </section>      
     </div>
  );
}

export default App;
