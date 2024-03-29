import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { LockOutlined as LockOutlinedIcon } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import signInImg2 from "../images/signIn2.jpg";
import InvalidCredentialsErrorMessage from "../components/InvalidCredentialsErrorMessage";
import PoweredByApptelier from "../components/PoweredByApptelier";
import ObjectFromFormData from "../utils/objectFromFormData";
import SessionManager from "../session/sessionManager";

const styles = theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: `url(${signInImg2})` /* Ideal size: 1080x1617 */,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "right"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class SignIn extends React.Component {
  state = {
    userAccounts: [],
    remindAccounts: false,
    invalidCredentials: false
  };

  handleReminderChange = (event, checked) => {
    this.setState({ remindAccounts: event.target.checked });
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    let formDataObject = ObjectFromFormData(data);
    let url =
      "https://ei-web-api.azurewebsites.net/api/useraccount/authenticate";
    fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(formDataObject)
    })
      .then(response => {
        response.json();
        if (response.status === 200) {
          SessionManager.createSession();
          this.props.history.push("/");
        }
        if (response.status === 401) {
          this.setState({ invalidCredentials: true });
        }
      })
      .catch(console.log);
  };

  componentDidMount() {
    fetch("https://ei-web-api.azurewebsites.net/api/useraccount", {
      method: "GET",
      mode: "cors",
      cache: "no-cache"
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ userAccounts: data });
      })
      .catch(console.log);
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container component="main" className={classes.root}>
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Acceder
              </Typography>
              <form
                className={classes.form}
                onSubmit={this.handleSubmit}
                method="post"
              >
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Nombre de usuario"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  error={this.state.invalidCredentials}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={this.state.invalidCredentials}
                />
                {this.state.invalidCredentials && (
                  <InvalidCredentialsErrorMessage />
                )}
                <FormControlLabel
                  control={
                    <Checkbox
                      value="reminder"
                      color="primary"
                      onChange={this.handleReminderChange}
                    />
                  }
                  label="Recu&eacute;rdame qu&eacute; cuentas hay"
                />
                {this.state.remindAccounts && (
                  <Box>
                    <Typography variant="caption">
                      {this.state.userAccounts
                        .map(ua => `(${ua.id}) ${ua.username}:${ua.password}`)
                        .join(". ")}
                    </Typography>
                  </Box>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Acceder
                </Button>
                <Box mt={5}>
                  <PoweredByApptelier />
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(SignIn));
