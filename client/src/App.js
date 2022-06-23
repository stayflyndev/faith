import './App.css';
import {useEffect, useState} from 'react';
import Axios from 'axios';
import styled from '@emotion/styled'
import Button from '@mui/material/Button';
import Card from './components/Card'

const headers = {
  'X-RapidAPI-Key': '9d752015b3msh447c523c9c6318bp16283fjsn3fb61e8b3e4d',
      'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com'
};

function App() {
const [bibleVerse, getBibleVerse] = useState("");

useEffect(() => {
  getBibleProps();
}, [])

 // bible api 
 const getBibleProps = () =>  {
  const options = {
    method: 'GET',
    url: 'https://ajith-holy-bible.p.rapidapi.com/GetVerses',
    params: {Book: 'Matthew', chapter: '6', VerseFrom: '25', VerseTo: '30'},
    headers: {
      'X-RapidAPI-Key': '9d752015b3msh447c523c9c6318bp16283fjsn3fb61e8b3e4d',
      'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com'
    }
  };
  
  Axios.request(options)
  .then(function (response) {
   const displayBibleVerse = response.data;
   //update state
   getBibleVerse(displayBibleVerse)})

  .catch(function (error) {
    console.error(error);
  });
}


  return (
    <div className="App">
      <header className="App-header">
      <h1 style={{ fontFamily: 'Poppins' }}> God is working even when we can't see it </h1>

        <Button onClick={getBibleProps}>Click</Button>
        <Card verse={bibleVerse}></Card>
      </header>
    </div>
  );
}

export default App;
