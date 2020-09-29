import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const GuardedRoute = ({ 
    component: Component, 
    authed, 
    ...rest 
    }) => {
    const history = useHistory();
    const redirect = () => history.push('/');
    return (<Route {...rest}>
        {authed === true
            ? <Component />
        : <div>Loading... {redirect()}</div>}
    </Route>
    )};

const mapStateToProps = state => ({
    authed: state.login.authed
});

export default connect(mapStateToProps)(GuardedRoute);