import React from 'react';

import { 
    FormControl, 
    InputLabel, 
    Select,
    Grid,
    Typography,
    Button
} from '@material-ui/core';

const DropDown = (props) => {
    const [selection, setSelection] = React.useState('');
    
    const addItem = () => {
        props.addItemHandler(props.data.optionTitle + ' - ' + selection, 1, props.data.price, props.data._id);
        setSelection('');
    };

    return (
        <div>
            <FormControl>
                <Grid container direction="column">
                    <Grid container item>
                        <Grid item xs={6}>
                            <InputLabel>
                                {props.data.optionTitle}
                            </InputLabel>
                        </Grid>
                        {props.data.price ? <Grid item xs={6}>
                            <Typography>
                                £&nbsp;{props.data.price.toFixed(2)}
                            </Typography>
                        </Grid> : null}
                    </Grid>
                    <Grid item>
                        <Select native value={selection} onChange={(e) => setSelection(e.target.value)}>
                            <option aria-label="None" value=" " defaultValue/>
                            {props.data.selector.map(selector => {
                                if (props.data.optionActive) {
                                    return <option key={selector} value={selector}>{selector}</option>
                                }
                                return <option key={selector} disabled value={selector}>Sold out - {selector}</option>
                                }
                            )}
                        </Select>
                    </Grid>
                    <Grid item xs={3}>
                        <Button 
                            disabled={!props.data.optionActive} 
                            variant="contained" 
                            onClick={() => addItem()}>Add</Button>
                    </Grid>
                </Grid>
            </FormControl>
        </div>
    );
};

export default DropDown;