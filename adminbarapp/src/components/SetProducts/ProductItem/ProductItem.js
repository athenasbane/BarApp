import React from 'react';
import {
    Grid,
    Paper,
    Typography,
    Button,
    makeStyles
} from '@material-ui/core';
import { connect } from 'react-redux';
import ProductItemOption from './ProductItemOption/ProductItemOption';
import ProductItemLeft from './ProductItemLeft';
import { loadOptions, saveNewOption } from '../../../Redux/thunks/option.thunk';
import ProductItemNewOption from './ProductItemOption/ProductItemNewOption';

const useStyles = makeStyles({
    bordered: {
        border: '1px solid black'
    },
});

const ProductItem = (props) => {
    const { id, getOptions} = props;
    const classes = useStyles();
    const [ optionOpen, setOptionOpen ] = React.useState(false);
    const [ newOptionData, setNewOptionData ] = React.useState({
        optionTitle: '',
        type: 'increment',
        minVol: 0,
        price: 1,
        selector: [],
        optionActive: false
    });

    React.useEffect(() => {
        if (id) {
            getOptions(id)
        }
    }, [getOptions, id]);

    const handleChange = (event) => {
        event.persist()
        if (event.target.name === 'selector') {
            console.log('here')
            return setNewOptionData(prevState => ({
                ...prevState,
                [event.target.name]: event.target.value.split(', ')
            }))
        }
        if(event.target.name === 'optionActive') {
            console.log(event.target.checked)
            return setNewOptionData(prevState => ({
                ...prevState,
                optionActive: event.target.checked
            }))
        }
        
        setNewOptionData(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    };

    const handleNewOptionSave = (id, option) => {
        props.saveNewOption(id, option);
        setNewOptionData({
            optionTitle: '',
            type: 'increment',
            minVol: 0,
            price: 1,
            selector: [],
            optionActive: false
        })
        setOptionOpen(!optionOpen);
    };

    const options = props.options.filter(el => el.product === id);

    const optionsList = options
        .map((option, index) => <ProductItemOption 
                            key={option._id}
                            index={index}
                            option={option}
                            handleChange={props.handleChange} 
                             />);

    return (
        <Paper elevation={3} variant="outlined" square>
            <Grid justify="center" container item xs={12}>
                <Typography>{props.product.title}</Typography>
            </Grid>
            <Grid container direction="row">
                <Grid item xs={4}>
                    <ProductItemLeft 
                        saveProduct={props.saveProduct}
                        removeProduct={props.removeProduct} 
                        handleChange={props.handleChange} 
                        product={props.product}
                        productIndex={props.productIndex}/>
                </Grid>
                <Grid container item direction="column" xs={8}>
                    <Grid className={classes.bordered} item>
                        {optionsList}
                    </Grid>
                    <Grid item>
                        <Button disabled={props.product._id ? false : true}
                            onClick={() => setOptionOpen(!optionOpen)} 
                            variant="contained">Add New Option
                        </Button>
                        {optionOpen ? <ProductItemNewOption
                            option={newOptionData}
                            changeHandler={handleChange}
                            handleCancel={() => setOptionOpen(!optionOpen)}
                            handleSave={() => handleNewOptionSave(props.product._id, newOptionData)}
                        /> : null}
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

const mapStateToProps = state => ({
    options: state.option.optionData
});

const mapDispatchToProps = dispatch => ({
    getOptions: id => dispatch(loadOptions(id)),
    saveNewOption: (id, option) => dispatch(saveNewOption(id, option))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);