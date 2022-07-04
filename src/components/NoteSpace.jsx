import {useState} from "react"
import Note from "./Note.jsx"
import NewEntry from "./NewEntry.jsx"

export default function NoteSpace(){

  const [itemList,setItemList]=useState([]);

  function addItem(item){
    item.id=new Date().toGMTString();
    setItemList([...itemList,item]);
  }

  function deleteItem(id){
    let newArr = itemList.filter((item)=>{
      return item.id!==id;
    })
    setItemList(newArr);
  }

  return(
    <div className="notespace">
      <div className="wrapper">
        <NewEntry addFunc={addItem}/>
        {
          itemList.map((item) => (
            <Note
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              deleteFunc={deleteItem}
            />
          ))
        }
      </div>
    </div>
  )
}
