import React, { Component } from "react";

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            address: '', 
            id: '', 
            description: '', 
            price: ''
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
    

        return (
            <>
            <div className="post-it-note-form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="content"></label>
                    <input className="form-input" type="text" placeholder="content" onChange={onChange} name="content" id="content" />
                    <label htmlFor="importance"></label>
                    <input type="number"  className="form-input" placeholder="importance" onChange={onChange} name="importance" id="importance" />
                    <label htmlFor="id"></label>
                    <input type="number"  className="form-input" placeholder="id" onChange={onChange} name="id" id="id" />
                    <button type="submit">Post It</button>
                </form>
            </div>
            </>
        )
    }
}


export default PostForm;