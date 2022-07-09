import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import CardD from "./components/Card";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import Svg from "./components/Svg";
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const headers = {
  "X-RapidAPI-Key": "9d752015b3msh447c523c9c6318bp16283fjsn3fb61e8b3e4d",
  "X-RapidAPI-Host": "ajith-holy-bible.p.rapidapi.com",
};

function App() {
  const [bibleVerse, getBibleVerse] = useState([]);

  useEffect(() => {
   
 getBibleProps();
   
  }, []);

  const getBibleProps = () => {
    //BIBLE API GET REQUEST
    const config = {
      params: { Book: "Matthew", Chapter: "6", VerseFrom: "25", VerseTo: "30" },
      headers: {
        "X-RapidAPI-Key": "9d752015b3msh447c523c9c6318bp16283fjsn3fb61e8b3e4d",
        "X-RapidAPI-Host": "ajith-holy-bible.p.rapidapi.com",
      },
    };
    const configTwo = {
      params: {
        Book: "Jeremiah",
        Chapter: "29",
        VerseFrom: "11",
        VerseTo: "20",
      },
      headers: {
        "X-RapidAPI-Key": "9d752015b3msh447c523c9c6318bp16283fjsn3fb61e8b3e4d",
        "X-RapidAPI-Host": "ajith-holy-bible.p.rapidapi.com",
      },
    };
    const configThree = {
      params: {
        Book: "Proverbs",
        Chapter: "3",
        VerseFrom: "5",
        VerseTo: "6",
      },
      headers: {
        "X-RapidAPI-Key": "9d752015b3msh447c523c9c6318bp16283fjsn3fb61e8b3e4d",
        "X-RapidAPI-Host": "ajith-holy-bible.p.rapidapi.com",
      },
    };
    const configFour = {
      params: {
        Book: "1 Corinthians",
        Chapter: "1",
        VerseFrom: "2",
        VerseTo: "5",
      },
      headers: {
        "X-RapidAPI-Key": "9d752015b3msh447c523c9c6318bp16283fjsn3fb61e8b3e4d",
        "X-RapidAPI-Host": "ajith-holy-bible.p.rapidapi.com",
      },
    };

    // CALL BIBLE VERSES
    const corinthians = () => {
      return Axios.get(
        "https://ajith-holy-bible.p.rapidapi.com/GetVerses",
        configFour
      );
    };
    const matthew = () => {
      return Axios.get(
        "https://ajith-holy-bible.p.rapidapi.com/GetVerses",
        config
      );
    };
    const jeremiah = () => {
      return Axios.get(
        "https://ajith-holy-bible.p.rapidapi.com/GetVerses",
        configTwo
      );
    };
    const proverbs = () => {
      return Axios.get(
        "https://ajith-holy-bible.p.rapidapi.com/GetVerses",
        configThree
      );
    };

    // ADDING API FUNCS TO EMPTY ARRAY
    Promise.all([matthew(), jeremiah(), proverbs(), corinthians()]).then(function (response) {
      const chaptersToDisplay = [];

      const matth = response[0].data;
      const jerem = response[1].data;
      const proverbs = response[2].data;
      const corinthians = response[3].data;


      chaptersToDisplay.push(matth, jerem, proverbs, corinthians);
      // console.log(chaptersToDisplay)

      getBibleVerse(chaptersToDisplay);

    });
  };

  console.log(bibleVerse);


  return (
    <div className="App">
      <header className="App-header">
        <Header />
        
          hh
          <ImageList sx={{ width: 600, height: 450 }} cols={2} rowHeight={164}>

          {bibleVerse.map((verseDetail) => (

            

            <ImageListItem key={verseDetail.Chapter}>
            <CardD verse={verseDetail} ></CardD>
        </ImageListItem>
          
           ))}  
                   </ImageList>

       
        
      </header>
    </div>
  );
}

export default App;
