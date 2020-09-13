import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles({
  gutter: {
    paddingTop: "60px",
  },
});

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Anime = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item container>
        <Grid xs={0} sm={2} />
        <Grid xs={12} sm={8}>
          <div className={classes.gutter}>
            <Carousel responsive={responsive} autoPlay={true} arrows={false}>
              <Paper>Item 1</Paper>
              <Paper>Item 1</Paper>
              <Paper>Item 1</Paper>
              <Paper>Item 1</Paper>
            </Carousel>
          </div>
        </Grid>
        <Grid xs={0} sm={2} />
      </Grid>
    </>
  );
};

export default Anime;
