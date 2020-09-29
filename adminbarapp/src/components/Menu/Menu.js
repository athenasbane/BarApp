import React, { useState } from 'react';

import {
    Button,
    makeStyles,
} from '@material-ui/core';

import MenuDrawer from './MenuDrawer/MenuDrawer'

import { connect } from 'react-redux';

const Menu = (props) => {
    const [ drawOpen, setDrawOpen ] = useState(false);
    const [ checkoutStyles ] = useState({
        checkoutColor: '#ccc',
        checkoutDisabled: true
    });

    const useStyles = makeStyles({
        root: {
            width: '100%'
        },
        list: {
            width: '250px',
        },
        checkout: {
            backgroundColor: checkoutStyles.checkoutColor
        },
        button: {
            width: '100%',
            backgroundColor: '#eee'
        },
        link: {
            color: 'black'
        }
    });
    
    const classes = useStyles();
    const toggleDraw = () => {
        setDrawOpen(!drawOpen);
    };

    return (
        <div className={classes.root}>
            <React.Fragment >
                <Button 
                    className={classes.button} 
                    disabled={!props.authed} 
                    color="secondary" 
                    onClick={toggleDraw} >
                    Menu
                </Button>
                <MenuDrawer 
                    toggleDraw={toggleDraw}
                    drawOpen={drawOpen}
                />
            </React.Fragment>
        </div>    
    );
};

const mapStateToProps = state => ({
    authed: state.login.authed
});

export default connect(mapStateToProps)(Menu);