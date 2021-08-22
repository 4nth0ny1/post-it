import React, { Component } from "react";

class PostForm extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            content: '', 
            id: '',
            importance: ''
           
        }
    }

    render() {
        

        const onChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }  
        
        const handleSubmit = (event) => {
            event.preventDefault()
            this.props.addNote(this.state)
        }

        const addNewId = () => {
            this.props.findNextId(this.state)
        }
    

        return (
            <>
            <div className="post-it-note-form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="content"></label>
                    <input className="form-input" type="text" placeholder="content" onChange={onChange} name="content" id="content" />
                    <label htmlFor="importance"></label>
                    <input type="number"  className="form-input" placeholder="importance" onChange={onChange} min="1" max="3" name="importance" id="importance" />
                    <label htmlFor="id"></label>
                    <input type="number" className="form-input" onChange={onChange} name="id" id="id" value={addNewId}/>
                    <button type="submit">Post It</button>
                </form>
            </div>
            </>
        )
    }
}


export default PostForm;