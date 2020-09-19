import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import DirectionsIcon from "@material-ui/icons/Directions";

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
}));

const Search = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item container>
        <Grid xs={0} sm={2} />
        <Grid xs={12} sm={8}>
          <div className={classes.gutter}>
            <Paper
              component="form"
              className={classes.root}
              onSubmit={dateSubmit}
            >
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
              <InputBase
                type="text"
                onChange={onChange}
                className={classes.input}
                placeholder="Search Movies"
                inputProps={{ "aria-label": "search Movies" }}
              />
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              ></IconButton>
              <Divider className={classes.divider} orientation="vertical" />
              <IconButton
                color="primary"
                className={classes.iconButton}
                aria-label="directions"
              >
                <DirectionsIcon />
              </IconButton>
            </Paper>
          </div>
        </Grid>
        <Grid xs={0} sm={2} />
      </Grid>
    </>
  );
};

export default Search;
