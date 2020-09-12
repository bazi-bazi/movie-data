import React from "react";
import { Grid } from "@material-ui/core";
const MovieList = () => {
  return (
    <>
      <Grid item container>
        <Grid xs={0} sm={2} />
        <Grid xs={12} sm={8}>
          <h2>Movie List </h2>
        </Grid>
        <Grid xs={0} sm={2} />
      </Grid>
    </>
  );
};

export default MovieList;
