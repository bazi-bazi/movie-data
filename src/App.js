import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/header";
import Search from "./Search";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
        <Search />
      </Grid>
    </Grid>
  );
}

export default App;
