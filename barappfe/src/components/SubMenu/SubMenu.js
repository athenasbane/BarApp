import React from 'react';
import {
    Grid,
    Breadcrumbs,
    Link,
    makeStyles
} from '@material-ui/core';

import { connect } from 'react-redux'; 

const useStyles = makeStyles({
    root: {
        marginTop: '40px'
    }
});



// const breadcrumbData = [{
//     name: 'Full Menu',
//     path: '#top'
// }, {
//     name: 'Drinks',
//     path: '/drinks'
// }, {
//     name: 'Food',
//     path: '/food'
// }];



const SubMenu = (props) => {

    const breadcrumbData = (products) => {
        const unique = [ ...new Set(products.map(item => item.category))];
        if(unique.length > 1) {
            return unique.map(product => ({
                name: product.charAt(0).toUpperCase() + product.slice(1),
                path: `#${product}`}));
        }
        return products.map(products => ({ name: products.subCategory,
                                           path: `#${products.subCategory}`                                                             
        }));
    }

    const menuData = breadcrumbData(props.products);

    const links = menuData.map(link => (
        <Link key={link.name} color="inherit" href={link.path}>{link.name}</Link>
    ));

    const classes = useStyles();
    return (
        <Grid id="#top" className={classes.root} container item xs={12}>
            <Grid item xs={12}>
                <Breadcrumbs maxItems={3} aria-label="breadcrumb">
                    {links}
                </Breadcrumbs>
            </Grid>
        </Grid>
    );  
};

const mapStateToProps = state => ({
    products: state.products.data,
});

export default connect(mapStateToProps)(SubMenu);