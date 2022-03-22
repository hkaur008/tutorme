import React, { useEffect } from "react";
// import Menu from "../components/menu";
// import { Helmet } from "react-helmet";
// import AppBar from "@mui/AppBar";
// import Toolbar from "@mui/Toolbar";
// import Typography from "@mui/Typography";
// import Button from "@mui/Button";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";
//use-history to redirect
import {  useNavigate  } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import random from '../assets/random.jpg'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));
const Main = () => {
    const navigate = useNavigate();
  const classes = useStyles();

//   checking jwt tokens
//   useEffect(() => {
//     if (!localStorage.getItem("token")) {
// navigate('/home');
//     }
//   }, [navigate]);

  // //logout function
  // const logout = () => {
  //   // localStorage.removeItem("userid");
  //   // localStorage.removeItem("token");
  //   // history.push("/");
  // };

  return (
    <>
      
     
      <div className="Main">
          Students Dashboard !
          <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
  <Card >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={random}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>

  <Grid item xs={6} md={8}>
  <Card >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={random}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>
  <Grid item xs={6} md={8}>
  <Card >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={random}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>

  <Grid item xs={6} md={8}>
  <Card >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={random}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>

  <Grid item xs={6} md={8}>
  <Card >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={random}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>
  <Grid item xs={6} md={8}>
  <Card >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={random}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>

  
  </Grid>

  
 


        {/* <Chatbot /> */}
      </div>
    </>
  );
};

export default Main;