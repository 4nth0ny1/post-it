const Post = (props) => {
    const imp = props.note.importance
  
    if (imp === "high"){
        return (
            <>
                <div className="post-it-note">
                    <p className="post-it-note-content">{props.note.content}</p>
                    <p className="post-it-note-content red">{props.note.importance}</p>
                </div>
                
            </>
        )
    
    } else {
        return (
            <>
                <div className="post-it-note">
                    <p className="post-it-note-content">{props.note.content}</p>
                    <p className="post-it-note-content importance">{props.note.importance}</p>
                </div>
            </>
        )
    }  
}

export default Post;