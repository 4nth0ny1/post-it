import Post from './Post';

const PostContainer = (props) => {

    const postArray = props.notes.map(note => {
        return <Post key={note.id} note={note} />
    })
    return(
        <>
            <div className="post-array">
                {postArray}
            </div>
        </>
    )
}

export default PostContainer;