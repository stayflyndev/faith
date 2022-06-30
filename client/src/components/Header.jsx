import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/react';
import Svg from './Svg';
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion"


export default function BasicButtons() {

    const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  font-family: Concert One

`;
const list = { hidden: { opacity: 0 } }
const item = { hidden: { x: -10, opacity: 0 } }
  return (
<Stack spacing={1} direction="row">
<motion.ul animate="hidden" variants={list}>
    <motion.li variants={item} />
    <motion.li variants={item} />
    <motion.li variants={item} />
  </motion.ul>
    {/* header and icon  */}
 <Grid container spacing={1}>
  <Grid item xs={12}>
    <Title>promises &</Title>
  </Grid>      
  <Grid item xs={7}>
    <Title>faith </Title>
  </Grid>
  <Grid item xs={5}>
   <Svg/>
  </Grid>    
 </Grid>
</Stack>
  );
}
