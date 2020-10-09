import React from 'react';
import PropTypes from 'prop-types';
import { Route, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const GuardedRoute = ({ component: Component, authed, ...rest }) => {
  const history = useHistory();
  const redirect = () => history.push('/');
  return (
    <Route {...rest}>{authed === true ? <Component /> : <div>Loading... {redirect()}</div>}</Route>
  );
};

GuardedRoute.propTypes = {
  component: PropTypes.object.isRequired,
  authed: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authed: state.login.authed,
});

export default connect(mapStateToProps)(GuardedRoute);
