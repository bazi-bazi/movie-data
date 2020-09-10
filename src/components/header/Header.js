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
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Typography align="center" variant="h3" color="primary">
          Movie Database
        </Typography>
        <Tab label="Item Three" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  );
}
