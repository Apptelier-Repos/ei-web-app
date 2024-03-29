import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing(8),
    flexGrow: 1
  }
});

class NotFound extends React.Component {
  render() {
    return <Typography>P&aacute;gina no encontrada</Typography>;
  }
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(NotFound));
