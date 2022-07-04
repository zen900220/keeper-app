import {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

export default function NewEntry(props){
  const [item,setItem]=useState({
    id:null,
    title:"",
    content:""
  })

  const [readyToAdd,setReadyToAdd] =useState(false);

  function handleClick(){
    setReadyToAdd(true);
  }

  function handleChange(event){
    event.persist();
    let name=event.target.name;
    let val=event.target.value;
    setItem({
      ...item,
      [name]:val
    });
  }

  function addEntry(){
    if(item.title==="" || item.content==="") return;
    props.addFunc(item);
    setItem({
      id:null,
      title:"",
      content:""
    })
  }

  return(
    <div className="newentry">
      <input
        onClick={handleClick}
        onChange={handleChange}
        name="title"
        placeholder="Title"
        value={item.title}
      />
      <textarea
        style={{display:readyToAdd?"block":"none"}}
        onChange={handleChange}
        name="content"
        placeholder="Write a Note"
        value={item.content}
       />
      <Zoom in={readyToAdd}>
        <Fab className="addbutton" onClick={addEntry}>
          <AddIcon fontSize="large"/>
        </Fab>
      </Zoom>
    </div>
  )
}
