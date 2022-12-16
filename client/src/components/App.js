import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// import { v4 as uuidv4 } from 'uuid';

function App() {
  const [itemsArray,setArray] = useState([])
  // const uniqueKey = uuidv4();
  const addItem = (items,setItems)=>{
    setArray((p)=>{
      if(items.title!=="" && items.content!=="")
      return ([...p,items])
      else
      return console.error("prevented from entering empty title and content")
    })
    setItems({title:"",content:""});
}
const delItem = (index) =>{
  setArray((p)=>{        //currentElement,it's index
    return itemsArray.filter((element,ind)=>{
      
        return ind!==index;
    })
  })
}
  return (
    <div>
      <Header />
      <CreateArea addItem={addItem}/>
      {itemsArray.map((singleNote,index)=>{

      return<Note key={index} index={index} title={singleNote.title} content={singleNote.content} delItem={delItem}/>
      })}
      <Footer />
    </div>
  );
}

export default App;


//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/
