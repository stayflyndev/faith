import './App.css';
import {useEffect, useState} from 'react';
import Axios from 'axios';
import styled from '@emotion/styled'
import Button from '@mui/material/Button';
import CardD from './components/Card'
import Container from '@mui/material/Container';
import Header from './components/Header'
import Svg from './components/Svg'

const headers = {
  'X-RapidAPI-Key': '9d752015b3msh447c523c9c6318bp16283fjsn3fb61e8b3e4d',
      'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com'
};

function App() {
const [bibleVerse, getBibleVerse] = useState("state:");

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
    params: {Book: 'Jeremiah', chapter: '29', VerseFrom: '11', VerseTo: '20'},
    headers: {
      'X-RapidAPI-Key': '9d752015b3msh447c523c9c6318bp16283fjsn3fb61e8b3e4d',
      'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com'
    }
  };

  // CALL BIBLE VERSES
  const matthew = () => {
    return Axios.get('https://ajith-holy-bible.p.rapidapi.com/GetVerses', config)
  }
  const jeremiah = () => {
   return Axios.get('https://ajith-holy-bible.p.rapidapi.com/GetVerses', configTwo)
    
  }
  const jeremiahh = () => {
    return Axios.get('https://ajith-holy-bible.p.rapidapi.com/GetVerses', configTwo)
     
   }

  // ADDING API FUNCS TO EMPTY ARRAY
 Promise.all([matthew(), jeremiah(), jeremiahh()])
 .then(function(response){
  const chaptersToDisplay = []
  const matth = response[0].data
  const jerem = response[1].data
  const je = response[2].data

  chaptersToDisplay.push(matth, jerem, je)
  // console.log(chaptersToDisplay)
  
  getBibleVerse(chaptersToDisplay)
  console.log(bibleVerse)
 })
}

console.log(bibleVerse)

const theVerse = (bibleVerse) => {

}

  return (
    <div className="App">
      <header className="App-header">
      <Header/>
        {/* <Button onClick={getBibleProps}>Click</Button> */}
        <Container>
    {bibleVerse.map((bv) => (
        <CardD verse={bv}>
        </CardD>
        ))} 
       
        </Container>

      </header>
    </div>
  );
}

export default App;
