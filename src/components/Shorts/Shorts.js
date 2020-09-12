import React from "react";
import { Grid } from "@material-ui/core";

const Shorts = () => {
  return (
    <>
      <Grid item container>
        <Grid xs={0} sm={2} />
        <Grid xs={12} sm={8}>
          <h2>Shorts</h2>
        </Grid>
        <Grid xs={0} sm={2} />
      </Grid>
    </>
  );
};

export default Shorts;