import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Movie from "../movie";

import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  gutter: {
    paddingTop: "50px",
  },
  movieText: {
    marginTop: "50px",
  },
  movieStyles: {
    marginTop: "50px",
    marginBottom: "50px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  movieStyle: {
    paddingBottom: "30px",
  },
}));

const MovieList = () => {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState([""]);
  const [dateSubmit, setDataSubmit] = useState("");

  // API
  const apiKey = "7da5e26fd03a8f191f5db478f3ff1dd2";

  useEffect(() => {
    getData();
  }, [dateSubmit]);

  const [movies, setMovies] = useState([]);

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
    );
    const data = await response.json();
    setMovies(data.results);
    console.log(data.results);
  };

  const updateSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const getSubmit = (e) => {
    e.preventDefault();
    setDataSubmit(searchTerm);
  };

  return (
    <>
      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}>
          <Typography className={classes.gutter} variant="h3" align="center">
            Search Movies
          </Typography>
          <div className={classes.gutter}>
            <Paper component="form" className={classes.root}>
              <form onSubmit={getSubmit} className={classes.root}>
                <InputBase
                  onChange={updateSearch}
                  className={classes.input}
                  placeholder="Search Movies"
                  inputProps={{ "aria-label": "search Movies" }}
                />

                <Divider className={classes.divider} orientation="vertical" />
                <IconButton
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </form>
            </Paper>
            <div>
              {movies === undefined ? (
                <Typography
                  align="center"
                  className={classes.movieText}
                  variant="overline"
                >
                  There is no movie yet
                </Typography>
              ) : (
                <div className={classes.movieStyles}>
                  {movies.map((movie) => (
                    <div>
                      <Movie
                        title={movie.title}
                        release={movie.release_date}
                        overview={movie.overview}
                        image={movie.poster_path}
                        className={classes.movieStyle}
                        key={movie.id}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Grid>
        <Grid xs={0} sm={2} />
      </Grid>
    </>
  );
};

export default MovieList;
