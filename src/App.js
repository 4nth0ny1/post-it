import logo from './logo.svg';
import './App.css';
import React from 'react';
import PostContainer from './components/PostContainer';
import { useState } from 'react';

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


  const handleClick = () => {
      const sortedNotes = notes.sort( function (a,b) {
        return b.importance - a.importance
      })
      setNotes(sortedNotes)
  }

  return (
    <>
      <h1>Post It</h1>
      <button onClick={handleClick}>Sort</button>
      <PostContainer notes={notes} deleteNote={deleteNote} />
    </>
  );
}

export default App;


