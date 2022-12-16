import React,{useState} from "react";
export default function CreateArea(props) {
    const [items,setItems] = useState({
        title:"",
        content:""
    })
    const handleChange = e =>{
        const {name,value} = e.target;
        setItems(p=>({...p,[name]:value}));
    }
  return (
    <div>
      <form onSubmit={e=>{e.preventDefault()}}>
        <input name="title" onChange={handleChange} placeholder="Title" value={items.title} />
        <textarea name="content" onChange={handleChange} placeholder="Take a note..." rows="3" value={items.content} />
        <button onClick={()=>{props.addItem(items)}}>+</button>
      </form>
    </div>
  );
}