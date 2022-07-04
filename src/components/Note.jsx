import {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Note(props){
  let [hoverState,setHoverState]=useState(false);
  function deleteEntry(){
    props.deleteFunc(props.id);
  }

  function hoverHandler(event){
    setHoverState(!hoverState);
  }

  return(
    <div className="note"
      //mouseEnter & mouseLeave : trigger when the corresponding event happens on the element that has the listener. Doesnt propagate to children.
      //mouseOver & mouseOut : trigger when the corresponding event happens on the element with the listener AND any of its children.
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
    >
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button
        onClick={deleteEntry}
        style={{display:hoverState?"block":"none"}}
      >
      <DeleteIcon fontSize="small"/>
      </button>
    </div>
  )
}
