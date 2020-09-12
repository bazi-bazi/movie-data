import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gutter: {
    paddingTop: "60px",
  },
});

const Anime = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item container>
        <Grid xs={0} sm={2} />
        <Grid xs={12} sm={8}>
          <div>
            <h2 className={classes.gutter}>Movie List </h2>
          </div>
        </Grid>
        <Grid xs={0} sm={2} />
      </Grid>
    </>
  );
};

export default Anime;
