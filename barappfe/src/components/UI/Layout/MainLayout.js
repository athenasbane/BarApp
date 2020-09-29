import React from 'react';
import { 
    Grid,
 } from '@material-ui/core';

import Header from '../Header/Header'; 
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import SubMenu from '../../SubMenu/SubMenu';

const MainLayout = (props) => {

    return (
    <React.Fragment>
        <Grid container>
            <Grid item xs={12}><Header /></Grid>
        </Grid>
        <Grid container>
            <Grid item xs={12}>
                <SubMenu />
            </Grid>
            <Grid item xs={12}>
                <Body />
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={12}>
               <Footer /> 
            </Grid>
        </Grid>
    </React.Fragment>
)};

export default MainLayout;