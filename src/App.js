import logo from './logo.svg';
import './App.css';
import React from 'react';
import PostContainer from './components/PostContainer';

function App() {

  const notes = [
    {
      id: 1,
      content: 'take out the trash',
      importance: 'high'
    },
    {
      id: 2,
      content: 'learn about react',
      importance: 'medium'
    },
    {
      id: 3,
      content: 'vacuum', 
      importance: 'low'
    },
    {
      id: 4,
      content: 'talk to mom',
      importance: 'high'
    },
  ]

  return (
    <>
      <h1>Post It</h1>
      <PostContainer notes={notes} />
    </>
  );
}

export default App;


//post it notes color code #f3e779