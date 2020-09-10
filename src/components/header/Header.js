import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";

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
  const [value, setValue] = React.useState(0);

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
        <Tab label="Shorts" disableRipple />
        <Typography
          align="center"
          variant="h3"
          color="textColor"
          className={classes.typo}
        >
          Movies
        </Typography>
        <Tab label="Anime" disableRipple />
        <Tab label="Documentary" disableRipple />
      </Tabs>
    </Paper>
  );
}
