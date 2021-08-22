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

  const addNote = (note) => {   // unclear about this. where does (note) come from 
    const newNotes = [...notes, note]  //what does this mean? 
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

  return (
    <>
      <h1 className="app-title">Post It</h1>
      <PostForm addNote={addNote} findNextId={findNextId} />
      <div className="sort-button-group">
        <button onClick={handleSortToggle}>Sorts</button>
        <button className={sortOpen ? 'hidden-sort' : 'show-sort-button'} onClick={sortImportanceClick}>Sort by Importance</button>
        <button className={sortOpen ? 'hidden-sort' : 'show-sort-button'} onClick={sortById}>Sort by Newest</button>
      </div>
      <PostContainer notes={notes} deleteNote={deleteNote} />
    </>
  );
}

export default App;


