import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/header";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid xs={0} sm={2} />
        <Grid xs={12} sm={8}>
          <h1>Body</h1>
        </Grid>
        <Grid xs={0} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
