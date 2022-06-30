import './App.css';
import {useEffect, useState} from 'react';
import Axios from 'axios';
import styled from '@emotion/styled'
import Button from '@mui/material/Button';
import Card from './components/Card'
import Container from '@mui/material/Container';
import Header from './components/Header'
import Svg from './components/Svg'

const headers = {
  'X-RapidAPI-Key': '9d752015b3msh447c523c9c6318bp16283fjsn3fb61e8b3e4d',
      'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com'
};

function App() {
const [bibleVerse, getBibleVerse] = useState("");

useEffect(() => {
  getBibleProps();
}, [])

 
 const getBibleProps = () =>  {
  //BIBLE API GET REQUEST 
  const config = {
    params: {Book: 'Matthew', chapter: '6', VerseFrom: '25', VerseTo: '30'},
    headers: {
      'X-RapidAPI-Key': '9d752015b3msh447c523c9c6318bp16283fjsn3fb61e8b3e4d',
      'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com'
    }
  };
  const configTwo = {
    params: {Book: 'John', chapter: '1', VerseFrom: '12', VerseTo: '20'},
    headers: {
      'X-RapidAPI-Key': '9d752015b3msh447c523c9c6318bp16283fjsn3fb61e8b3e4d',
      'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com'
    }
  };

  const getVerseOne = () => {
    return Axios.get('https://ajith-holy-bible.p.rapidapi.com/GetVerses', config)
  }
  const getVerseTwo = () => {
   return Axios.get('https://ajith-holy-bible.p.rapidapi.com/GetVerses', configTwo)
    
  }

  // ADDING API FUNCS TO EMPTY ARRAY
 Promise.all([getVerseOne(), getVerseTwo()])
 .then(function(response){
  const arr = []
  const one = response[0].data
  const two = response[1].data
  arr.push(one, two)
  // console.log(arr)
  
  getBibleVerse(arr)
 })
}


  return (
    <div className="App">
      <header className="App-header">
      <Header/>
        {/* <Button onClick={getBibleProps}>Click</Button> */}
        <Container>
        <Card verse={bibleVerse}></Card>
        </Container>

      </header>
    </div>
  );
}

export default App;
