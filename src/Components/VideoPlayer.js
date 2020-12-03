import '../CSS/style.css';
import ReactPlayer from'react-player';


function VideoPlayer(props){
    const {url, playing, loop, width, height} = props;

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