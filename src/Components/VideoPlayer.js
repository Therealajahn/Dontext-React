///////////////////////////   VIDEOPLAYER    ///////////////////////////////

import '../CSS/style.css';
import ReactPlayer from'react-player';
import leavesVideo from '../Video/leaves(edited).mp4';
import React, {useRef,useEffect,useState} from 'react';


function VideoPlayer(props){
    //Variables
    let {newVideoURL, playing, loop, width, height} = props;
    //Functions  
    let {disappearEditor} = props;
    //url defaults to defaultvideo if no url provided
    let [videoURL,setVideoURL] = useState(leavesVideo);	
    console.log('videoURL',videoURL);
        
    
    useEffect(()=>{
        //after new url is added, shift focus to video
	    //TODO:
	    console.log("newVideoURL in VideoPlayer", newVideoURL);    
	    if(newVideoURL)setVideoURL(newVideoURL);
	    //TODO: make editor disappear while user interacts with video
    },[newVideoURL])
    return(
        <div className="VideoPlayer">
            <ReactPlayer
             url={videoURL}
             playing={playing}
             muted={true}
             loop={loop}
             width={width}
             height={height}
            />
        </div>
    );
}

export default VideoPlayer;
