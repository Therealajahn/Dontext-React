/////////////////////////// CONTROLS ///////////////////////////////

import React, {useEffect} from 'react';

function Controls(props){
    const{openFile,saveClicked,playClicked,muteClicked,videoURLToApp} = props;
    function saveButtonClicked(){
        saveClicked(true);
    }
    function playButtonClicked(e){
        playClicked(e.target);
    }
    function muteButtonClicked(e){
        muteClicked(e.target);
    }
    function saveFile(data, filename, type) {
	 //TODO:implement this code   
        let file = new Blob([data], {type: type});
        if (window.navigator.msSaveOrOpenBlob)
          window.navigator.msSaveOrOpenBlob(file, filename);
        else {
		let a = document.createElement('a'),
	        url = URL.createObjectURL(file);
	        a.href = url;
		a.download = filename;
	        document.body.appendChild(a);
                a.click();
                setTimeout(function() {
                	document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
         	}, 0);
         }
     }
 
    useEffect(()=>{
        function getURLFromVideoForm(){
            let videoURLInput = document.getElementsByClassName('video-url-input')[0];
            let videoUrlSubmit = document.getElementsByClassName('change-video')[0];
            videoUrlSubmit.addEventListener('click',()=>{
              let  videoURL = videoURLInput.value;    
                console.log('videoURLToApp in Controls', videoURL)
	        videoURLToApp(videoURL);
	    })
        }
        getURLFromVideoForm();
    },[])
    
    return(
        <div className='Controls'>
            <input type="file" id="file-reader" 
	    //onClick={e => fileButtonClicked(e)}
	    />
            <button id="save-button" onClick={e => saveButtonClicked(e)}>Save File</button>
            <button id="play-button" onClick={e => playButtonClicked(e)}>Play Video</button>
            <button id="mute-button" onClick={e =>{muteButtonClicked(e)}}>Mute Video</button>
            <input type="text" className="video-url-input"/>
            <button className="change-video">Change Video</button>
            
        </div>
    )
}

export default Controls;
