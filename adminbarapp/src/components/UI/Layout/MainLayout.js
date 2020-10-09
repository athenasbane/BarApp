import React from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Menu from '../../Menu/Menu';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import { getAuthed } from '../../../Redux/thunks/login.thunk';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const MainLayout = ({ authCheck, login }) => {
  const classes = useStyles();
  const history = useHistory();
  const localStorageToken = localStorage.getItem('token');
  React.useEffect(() => {
    if (localStorageToken) {
      authCheck(localStorageToken);
      setTimeout(() => history.push('/products'), 400);
    } else if (login.token && login.authed) {
      localStorage.setItem('token', login.token);
    } else {
      localStorage.removeItem('token');
    }
  }, [authCheck, history, localStorageToken, login.token, login.authed]);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Menu />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} />
        <Grid className={classes.root} item xs={12}>
          <Body />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          {login.authed ? <Footer /> : null}
        </Grid>
      </Grid>
    </>
  );
};

MainLayout.propTypes = {
  login: PropTypes.shape({
    authed: PropTypes.bool.isRequired,
    token: PropTypes.string,
  }),
  authCheck: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = (dispatch) => ({
  authCheck: (token) => dispatch(getAuthed(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
