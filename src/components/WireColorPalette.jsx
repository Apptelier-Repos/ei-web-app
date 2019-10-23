import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Title from "./Title";
import WireColor from "./wireColor";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function WireColorPalette(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Tabla de colores</Title>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {props.colors.map(c => (
              <Grid key={c.id} item>
                <WireColor color={c} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
