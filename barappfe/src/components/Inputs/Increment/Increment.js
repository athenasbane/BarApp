import React from 'react';
import {
    Button,
    FormControl,
    InputLabel,
    Grid,
    makeStyles, 
    Typography
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles({
    root: {
        width: '100%',
        backgroundColor: '#eee',
        height: '100px',
        paddingTop: '15px',
        marginTop: '10px'
    }, 
    textBox: {
        width: '30px'
    },
})

const Increment = (props) => {
    const classes = useStyles();
    const [volume, setVolume] = React.useState(0);
    const handleInput = (event) => {
        if(event.target.value < 1) {
            setVolume(0)
        }
        setVolume(event.target.value)
    }
    const activeValidation = () => {
        if(!props.data.active) {
            return true;
        }
        if(volume > props.data.minVol) {
            return false;
        } else {
            return true;
        }
    };
    const addItem = () => {
        props.addItemHandler(props.data.title, volume, props.data.price)
        setVolume(0)
    }
    return (
        <div className={classes.root}>
            <Grid container direction="row">
                <Grid item xs={6}>
                    <InputLabel>{props.data.title}{props.data.active ? null : " - SOLD OUT"}</InputLabel>
                </Grid>
                <Grid item xs={6}>
                    <Typography>£&nbsp;{props.data.price.toFixed(2)}</Typography>
                </Grid>
            </Grid>
            <FormControl >
                <Grid 
                    container 
                    spacing={2} 
                    justify="center" 
                    alignContent="center" 
                    direction="row" 
                    alignItems="center">
                    <Grid item xs={3}>
                        <Button 
                            disabled={activeValidation()} 
                            onClick={() => setVolume(prevState => (prevState - 1))}>
                                <RemoveIcon />
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <input 
                            disabled={!props.data.active} 
                            className={classes.textBox} 
                            onChange={(event) => handleInput(event)} 
                            type="number" 
                            value={volume}/>
                    </Grid>
                    <Grid item xs={3}>
                        <Button 
                            disabled={!props.data.active}  
                            onClick={() => setVolume(prevState => (prevState + 1))}>
                                <AddIcon />
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button 
                            disabled={activeValidation()} 
                            variant="contained" 
                            onClick={() => addItem()}>Add</Button>
                    </Grid>
                </Grid>
            </FormControl>
        </div>
    );
};

export default Increment;