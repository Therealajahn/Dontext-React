import { Editor, EditorState } from "draft-js";
import 'draft-js/dist/Draft.css';
import React, {useState} from 'react'; 
import '../CSS/style.css';

function TextEditor(){
    const [editorState,setEditorState] =useState(
        EditorState.createEmpty()
    )
    return(
       <Editor editorState={editorState} onChange={setEditorState} />
    );
}

export default TextEditor;