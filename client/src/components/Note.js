
const Note = (props)=>{
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={()=>{props.delItem(props.index)}}><i className="material-icons">delete</i></button>
        </div>
    );
}

export default Note;