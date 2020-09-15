import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Movie from "../movie";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles({
  gutter: {
    paddingTop: "170px",
    alignItems: "center",
  },
  sizes: {
    marginLeft: "30px",
    marginRight: "30px",
  },
});

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const movies = [1, 2, 3, 4, 5, 6, 7];

const Anime = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid xs={0} sm={2} />
        <Grid xs={12} sm={8}>
          <Carousel
            responsive={responsive}
            autoPlay={false}
            arrows={true}
            centerMode={true}
            className={classes.gutter}
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
          >
            {movies.map((movie) => (
              <div key={movie.toString()}>
                <Movie />
              </div>
            ))}
          </Carousel>
        </Grid>
        <Grid xs={0} sm={8} />
      </Grid>
      <div></div>
    </>
  );
};

export default Anime;
