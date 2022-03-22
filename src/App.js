import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";

import Main from "./pages/main";
import NotFound from "./pages/notfound";
import Tutor from "./pages/tutor";
import { AppBar, Button, Menu, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();


  return (
    <Router>
     <AppBar position="static">
          <Toolbar>
            <Menu />
            <Typography variant="h6" className={classes.title}>
              &emsp; Tutor me 
            </Typography>
            <Button color="inherit">
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      <div className="App">
        <Routes>
        <Route path="/" strict exact element={<Main />} />
        <Route path="/tutor" strict exact element={<Tutor />} />
        <Route path="/*" strict exact element={<NotFound />} />
      </Routes>
      </div>
    </Router>
   
  );
}

export default App;
