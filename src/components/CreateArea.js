import React,{useState} from "react";

export default function CreateArea() {
    const [items,setItems] = useState({
        title:"",
        content:""
    })
    const handleChange = e =>{
        const {name,value} = e.target;
        if(name==="title")
        {setItems(p=>({...p,title:value}))}
        else
        setItems(p=>({...p,content:value}))
    }
    const addItem = ()=>{
        console.log(items);
    }
  return (
    <div>
      <form onSubmit={e=>{e.preventDefault()}}>
        <input name="title" onChange={handleChange} placeholder="Title" value={items.title} />
        <textarea name="content" onChange={handleChange} placeholder="Take a note..." rows="3" value={items.content} />
        <button onClick={addItem}>+</button>
      </form>
    </div>
  );
}