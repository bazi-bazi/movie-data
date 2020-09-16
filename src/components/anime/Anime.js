import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Movie from "../movie";

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

  return (
    <>
      <Grid container>
        <Grid xs={0} sm={2} />
        <Grid xs={12} sm={8}>
          {movies.map((movie) => (
            <div key={movie.toString()}>
              <Movie title={movie.title} />
            </div>
          ))}
        </Grid>
        <Grid xs={0} sm={8} />
      </Grid>
      <div></div>
    </>
  );
};

export default Anime;
