import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    height: "100vh"
  }
});

class SignIn extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Typography>Sign in page.</Typography>
      </React.Fragment>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(SignIn));
