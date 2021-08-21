const Post = (props) => {
    const imp = props.note.importance
  
    if (imp === 3){
        return (
            <>
                <div className="post-it-note">
                    <p className="post-it-note-content">{props.note.content}</p>
                    <div className="box high">High</div>
                </div>
                
            </>
        )
    
    } else if (imp === 2) {
        return (
            <>
                <div className="post-it-note">
                    <p className="post-it-note-content">{props.note.content}</p>
                    <div className="box med">Med</div>                
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="post-it-note">
                    <p className="post-it-note-content">{props.note.content}</p>
                    <div className="box low">Low</div>                
                </div>
            </>
        )
    }
}

export default Post;