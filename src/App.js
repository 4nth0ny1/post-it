import logo from './logo.svg';
import './App.css';
import React from 'react';
import PostContainer from './components/PostContainer';
import { useState } from 'react';
import PostForm from './components/PostForm'

function App() {

  const [ notes, setNotes ] = useState([
    {
      id: 1,
      content: 'take out the trash',
      importance: 3
    },
    {
      id: 2,
      content: 'learn about react',
      importance: 2
    },
    {
      id: 3,
      content: 'vacuum', 
      importance: 1
    },
    {
      id: 4,
      content: 'talk to mom',
      importance: 3
    },
    {
      id: 5,
      content: 'sing a song', 
      importance: 3
    },
    {
      id: 6,
      content: 'wash dishes', 
      importance: 2
    },
    {
      id: 7,
      content: 'read', 
      importance: 1
    },
  ])

  const deleteNote = (noteId) => {
    const filteredNotes = notes.filter(note => {
      return note.id !== noteId
    })
    setNotes(filteredNotes)
  }


  const sortImportanceClick = () => {
      const sortedNotes = [...notes].sort( function (a,b) {
        return b.importance - a.importance
      })
      setNotes(sortedNotes)
  }

  const sortById = () => {
    const sortedNotes = [...notes].sort( function (a,b) {
      return b.id - a.id
    })
    setNotes(sortedNotes)
  }

  const addNote = (note) => {
    const newNotes = [...notes, note]
    setNotes(newNotes)
  }

  const findNextId = () => {
    
    const countedNotes = [...notes].length + 1
      return countedNotes
  }

  return (
    <>
      <h1 className="app-title">Post It</h1>
      <PostForm addNote={addNote} findNextId={findNextId} />
      <div className="sort-button-group">
        <div className="dropdown">
          <button onClick="myFunction()" className="dropbtn">Sort ↓</button>
          <div id="myDropdown" className="dropdown-content">
            <div onClick={sortImportanceClick}>Importance</div>
            <div onClick={sortById}>Newest</div>
          </div>
        </div>

        <button onClick={sortImportanceClick}>Sort by Importance</button>
        <button onClick={sortById}>Sort by Newest</button>
      </div>
      <PostContainer notes={notes} deleteNote={deleteNote} />
    </>
  );
}

export default App;


