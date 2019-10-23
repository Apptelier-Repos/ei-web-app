import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    width: 100
  },
  baseColor: {
    height: 140,
    paddingTop: 45
  },
  stripeColor: {
    height: 50
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function WireColor(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Box className={classes.baseColor} bgcolor={props.color.baseWebColor}>
          <Box
            className={classes.stripeColor}
            bgcolor={props.color.stripeWebColor}
            visibility={props.color.stripeWebColor}
          ></Box>
        </Box>
        <Typography color="textSecondary" variant="h4">
          {props.color.code}
        </Typography>
        <Typography variant="body2" noWrap={true}>
          {props.color.name}
        </Typography>
        <Typography variant="body2" noWrap={true}>
          {props.color.translatedName}
        </Typography>
      </Box>
    </React.Fragment>
  );
}
