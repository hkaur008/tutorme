import React from 'react';
import error from '../assets/error.jpg'
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
  },
  notfound: {
    backgroundImage: `url(${error})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
  
}));


export default function NotFound() {
  const classes = useStyles();
  return (

    <div classname={classes.notfound} >
      Not Found !
    </div>
  );
}