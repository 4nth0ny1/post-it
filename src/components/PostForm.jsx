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
            return this.props.findNextId()
        }

        const handleReset = (event) => {
            Array.from(document.querySelectorAll("input")).forEach(
                input => (input.value = "")
            )
            this.setState({
                [event.target.name]: [{}]
            })
        }
    
        return (
            <>
            <div className="post-it-note-form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="content"></label>
                    <input className="form-input" type="text" placeholder="note" onChange={onChange} name="content" id="content" />
                    <label htmlFor="importance"></label>
                    <input type="number"  className="form-input" placeholder="importance 1-3" onChange={onChange} min="1" max="3" name="importance" id="importance" />
                    <label htmlFor="id"></label>
                    <input type="number" className="form-input" onChange={onChange} name="id" id="id" value={addNewId()} />
                    <div className="button-group-for-create-form">
                        <button className="reset-button" type="submit">Post It</button>
                        <div className="reset-button" onClick={handleReset}>Reset</div>
                    </div>
                </form>
            </div>
            </>
        )
    }
}


export default PostForm;