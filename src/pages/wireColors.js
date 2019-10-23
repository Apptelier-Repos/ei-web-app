import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import WireColorPalette from "../components/WireColorPalette";

const styles = theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
});

class WireColors extends React.Component {
  static pageDisplayName = "Colores de Circuitos";

  state = {
    wireColorsData: []
  };

  componentDidMount() {
    fetch("https://ei-web-api.azurewebsites.net/api/wirecolor", {
      method: "GET",
      mode: "cors",
      cache: "no-cache"
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ wireColorsData: data });
      })
      .catch(console.log);
  }

  render() {
    const { classes } = this.props;
    const fixedHeightPaper = clsx(classes.paper);

    return (
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={fixedHeightPaper}>
            <WireColorPalette colors={this.state.wireColorsData} />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

WireColors.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WireColors);
