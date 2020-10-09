import React from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles, TextField, Button, Paper, FormLabel } from '@material-ui/core';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../Redux/thunks/login.thunk';

const useStyles = makeStyles({
  root: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    marginTop: '15px',
  },
  form: {
    width: '70%',
  },
  paper: {
    backgroundColor: '#999999',
    width: '40%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '15px',
    margin: '100px',
  },
});

const Login = ({ setLogin, token }) => {
  const classes = useStyles();
  const [loginError, setLoginError] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLogin(formData);
    if (token) {
      return setLoginError(true);
    }
    setTimeout(() => history.push('/products'), 400);
  };
  return (
    <Paper elevation={4} className={classes.paper}>
      <Grid container justify="center">
        <Grid item container alignItems="center" direction="column">
          <form className={classes.form} onSubmit={(event) => handleSubmit(event)}>
            <Grid item>
              {loginError ? <FormLabel>Login Error: Please try again</FormLabel> : null}
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                name="email"
                onChange={(event) =>
                  setFormData({ ...formData, [event.target.name]: event.target.value })
                }
                value={formData.email}
                label="Email"
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                name="password"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    [event.target.name]: event.target.value,
                  })
                }
                type="password"
                value={formData.password}
                label="Password"
              />
            </Grid>
            <Grid item>
              <Button className={classes.root} variant="contained" type="submit">
                Login
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
};

Login.propTypes = {
  setLogin: PropTypes.func.isRequired,
  token: PropTypes.string,
};

const mapStateToProps = (state) => ({
  token: state.login.token,
});
const mapDispatchToProps = (dispatch) => ({
  setLogin: (loginData) => dispatch(login(loginData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
