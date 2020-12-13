const { render } = require("@testing-library/react");

function Controls(props){
    const{muted} = props;

    function muteButtonClicked(e){
        muted(e.target);
    }
    return(
        <div className='Controls'>
            <input type="file" id="file-reader"/>
            <button id="save-button" >Save File</button>
            <button id="play-button">Play Video</button>
            <button id="mute-button" onClick={e =>{muteButtonClicked(e)}}>Mute Video</button>
            <input type="text" id="video-embed"/>
            <button id="change-video">Change Video</button>
        </div>
    )
}

export default Controls;