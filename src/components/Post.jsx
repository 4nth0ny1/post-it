const Post = (props) => {
    
    const imp = props.note.importance

    const handleDelete = (e) => {
        props.deleteNote(props.note.id)
    }
  
    if (parseInt(imp) === 3){
        return (
            <>
                <div className="post-it-note">
                    <p className="post-it-note-content">{props.note.content}</p>
                    <button className="delete-show" onClick={handleDelete}>Delete</button>
                    <div className="box high">High</div>
                </div>
                
            </>
        )
    
    } else if (parseInt(imp) === 2) {
        return (
            <>
                <div className="post-it-note">
                    <p className="post-it-note-content">{props.note.content}</p>
                    <button className="delete-show" onClick={handleDelete}>Delete</button>
                    <div className="box med">Med</div>                
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="post-it-note">
                    <p className="post-it-note-content">{props.note.content}</p>
                    <button className="delete-show" onClick={handleDelete}>Delete</button>
                    <div className="box low">Low</div>                
                </div>
            </>
        )
    }
}

export default Post;