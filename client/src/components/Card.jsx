import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/react'
import Grid from '@mui/material/Grid';

const color = 'white'


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({verse}) {
const bib = []

console.log(verse)

const book = verse.Book
// STYLING 
const Card = styled.section`
box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
0px 1px 1px 0px rgba(0, 0, 0, 0.14),
0px 1px 3px 0px rgba(0, 0, 0, .12);
border-radius: 5px;
background: #82C0CC;
margin: 20px
`;

    // console.log(props.verse.Chapter + props.verse.Output)
    // const output = props.verse.Output
    // console.log("+_++++" + output)
return (  
  <>
  
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        </Typography>
       
        <Typography variant="h5" component="div">
          {book}
        </Typography>
      
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        </Typography>
        <Typography variant="body2">
       
          <br />
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </>
  );
}