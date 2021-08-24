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

  const [ sortOpen, setSortToggle ] = useState('false');

  const handleSortToggle = () => {
    setSortToggle(!sortOpen);
  }

  const [ dropDown, setDropDown ] = useState('false');

  const handleDropDown = () => {
    setDropDown(!dropDown)
  }

  return (
    <>
      <div className="title-heading-div">
        <h1 className="app-title">Post It</h1>
      </div>

      <PostForm addNote={addNote} findNextId={findNextId} />

      <div className="drop-down-button-group">
        <div className="drop-down-button" onClick={handleSortToggle} onClick={handleDropDown}>Sort ➜</div>
        <div className="sort-group-row">
          <div className={dropDown ? 'collapsed-drop-down' : 'open-drop-down'}>
            <div className="sort-options" onClick={sortImportanceClick}>Sort by Importance</div>
            <div className="sort-options" onClick={sortById}>Sort by Newest</div>
          </div>
        </div>
      </div>

      <PostContainer notes={notes} deleteNote={deleteNote} />
    </>
  );
}

export default App;


