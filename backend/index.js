const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const PORT = 5000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})

app.get('/', (req, res) => {
res.send({message:"test"})
})

app.get('https://ajith-holy-bible.p.rapidapi.com/GetVerses', (req, res)=>{
  res.json(req.query)
})

const headers = {
    'X-RapidAPI-Key': '9d752015b3msh447c523c9c6318bp16283fjsn3fb61e8b3e4d',
    'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com',
  };
  const params = {Book: 'Luke', chapter: '8'}


//  axios.get('https://ajith-holy-bible.p.rapidapi.com/GetChapter', {headers})
//  .then((res) => {
//      console.log(res.data)
//  }).catch(function (error) {
// 	console.error(error);
// })
  
const options = {
    method: 'GET',
    url: 'https://ajith-holy-bible.p.rapidapi.com/GetVerses',
    params: {Book: 'Luke', chapter: '1', VerseFrom: '7', VerseTo: '8'},
    headers: {
      'X-RapidAPI-Key': '9d752015b3msh447c523c9c6318bp16283fjsn3fb61e8b3e4d',
      'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });
