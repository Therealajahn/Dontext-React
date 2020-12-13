import '../CSS/style.css';
import ReactPlayer from'react-player';
import leavesVideo from '../Video/leaves(edited).mp4';


function VideoPlayer(props){
    let {url, playing, loop, width, height} = props;
    //url defaults to defaultvideo if no url provided
    let defaultVideo = leavesVideo;
    url = url? url : defaultVideo;

    return(
        <div className="VideoPlayer">
            <ReactPlayer
             url={url}
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