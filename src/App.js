import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/header";
import MovieList from "./components/movielist";
import Shorts from "./components/Shorts";
import Anime from "./components/anime";
import Documentary from "./components/documentary";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
    </Grid>
  );
}

export default App;
