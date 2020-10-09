import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import SetProducts from '../../SetProducts/SetProducts';
import SetTables from '../../SetTable/SetTable';
import Login from '../../Login/Login';
import AuthedRoute from '../../Login/AuthedRoute/AuthedRoute';

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: 0,
    padding: 0,
  },
});

const Body = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="lg">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <AuthedRoute path="/products" component={SetProducts} />
        <AuthedRoute path="/tables" component={SetTables} />
        <Route path="/settings">{/* Settings (With Auth Guard) */}</Route>
        <Route path="/downloads">{/* Downloads (With Auth Guard) */}</Route>
        <Route path="/404">{/* 404 */}</Route>
      </Switch>
    </Container>
  );
};

export default Body;
