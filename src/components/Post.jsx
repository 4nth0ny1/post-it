function ColorImportance(props){
    document.querySelector('.post-it-note-content').style.color = 'red'
}

const Post = (props) => {
    const imp = props.note.importance
  
    if (imp === "high"){
        return (
            <>
                <div className="post-it-note">
                    <p className="post-it-note-content">{props.note.content}</p>
                </div>
                <ColorImportance importance={imp}/>;
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