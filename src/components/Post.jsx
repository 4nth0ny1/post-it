

const Post = (props) => {

    const colorImportance = (props) => {
        if (props.note.importance === 'high') {
            props.note.importance.style.color = 'red'
        } else if (props.note.importance === 'medium') {
            props.note.importance.style.color = 'yellow'
        } else if (props.note.importance === 'low') {
            props.note.importance.style.color = 'green'
        }
    }

    return (
        <>
            <div className="post-it-note">
                <p className="post-it-note-content">{props.note.content}</p>
                <p className="post-it-note-content">{colorImportance}</p>
            </div>
        </>
    );
}

export default Post;