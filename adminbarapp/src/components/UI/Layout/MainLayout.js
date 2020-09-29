import React from 'react';
import { 
    Grid,
    makeStyles
 } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Menu from '../../Menu/Menu';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import { getAuthed } from '../../../Redux/thunks/login.thunk';

const useStyles = makeStyles({
    root: {
        width: '100%'
    }
})

const MainLayout = (props) => {
    const classes = useStyles();
    const { authCheck } = props;
    const { token, authed } = props.login
    let history = useHistory();
    const localStorageToken = localStorage.getItem('token');
    React.useEffect(() => {
        if(localStorageToken) {
            authCheck(localStorageToken);
            setTimeout(() => history.push('/products'), 400);
        } else if(token && authed) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        } 
    },[authCheck, history, localStorageToken, token, authed])

    return (
    <React.Fragment>
        <Grid container>
            <Grid item xs={12}>
                <Menu />
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={12}>
                
            </Grid>
            <Grid className={classes.root} item xs={12}>
                <Body />
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={12}>
               { props.login.authed ? <Footer /> : null}
            </Grid>
        </Grid>
    </React.Fragment>
)};

const mapStateToProps = state => ({
    login: state.login
})

const mapDispatchToProps = dispatch => ({
    authCheck: token => dispatch(getAuthed(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);