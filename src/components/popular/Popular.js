import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-elastic-carousel";
import Movie from "../movie";

const useStyles = makeStyles({
  gutter: {
    paddingTop: "70px",
    alignItems: "center",
  },
  sizes: {
    marginLeft: "30px",
    marginRight: "30px",
  },
});

const Anime = () => {
  const classes = useStyles();

  const apiKey = "7da5e26fd03a8f191f5db478f3ff1dd2";

  useEffect(() => {
    getData();
  }, []);

  const [movies, setMovies] = useState([]);

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );
    const data = await response.json();
    setMovies(data.results);
    console.log(data.results);
  };

  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 4 },
  ];

  return (
    <>
      <Grid container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}>
          <Typography className={classes.gutter} variant="h3" align="center">
            Popular Movies
          </Typography>
          <Carousel breakPoints={breakPoints} className={classes.gutter}>
            {movies.map((movie) => (
              <div>
                <Movie
                  title={movie.title}
                  release={movie.release_date}
                  overview={movie.overview}
                  image={movie.poster_path}
                  key={movie.id}
                />
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
