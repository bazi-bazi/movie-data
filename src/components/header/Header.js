import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import MovieList from "../movielist";
import Upcoming from "../upcoming";
import Popular from "../popular";
import Toprated from "../toprated";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: "10vh",
  },
  tabs: {
    paddingTop: "15px",
  },

  typo: {
    marginLeft: "25px",
    marginRight: "25px",
    fontFamily: "Lexend Peta",
    color: "#EAD59F",
  },
});

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classNames(classes.root)}>
      <Tabs
        className={classNames(classes.tabs)}
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        centered
      >
        <Tab label="Movies" disableRipple />

        <Tab label="Upcoming" disableRipple />
        <Typography
          align="center"
          variant="h3"
          color="textColor"
          className={classes.typo}
        >
          Movies
        </Typography>
        <Tab label="Popular" disableRipple />
        <Tab label="Top Rated" disableRipple />
      </Tabs>
      {value === 0 && <MovieList />}
      {value === 1 && <Upcoming />}
      {value === 3 && <Popular />}
      {value === 4 && <Toprated />}
    </Paper>
  );
}
