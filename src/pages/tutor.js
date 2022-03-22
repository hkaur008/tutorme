import React from 'react';
import error from '../assets/error.jpg'
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
  },
  Tutor: {
    backgroundImage: `url(${error})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
  
}));


export default function Tutor() {
  const classes = useStyles();
  return (

    <div classname={classes.Tutor} >
     tutor dashboard here!
    </div>
  );
}