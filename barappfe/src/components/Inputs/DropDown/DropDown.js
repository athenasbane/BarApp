import React from 'react';

import { 
    FormControl, 
    InputLabel, 
    Select,
    Grid,
    Typography 
} from '@material-ui/core';

const DropDown = (props) => {
    const [selection, setSelection] = React.useState('');

    return (
        <div>
            <FormControl>
                <Grid container direction="column">
                    <Grid container item>
                        <Grid item xs={6}>
                            <InputLabel>
                                {props.data.title}
                            </InputLabel>
                        </Grid>
                        {props.data.price ? <Grid item xs={6}>
                            <Typography>
                                £&nbsp;{props.data.price.toFixed(2)}
                            </Typography>
                        </Grid> : null}
                    </Grid>
                    <Select native value={selection} onChange={(e) => setSelection(e.target.value)}>
                        <option aria-label="None" value=" " defaultValue/>
                        {props.data.selectors.map(selector => (
                            <option key={selector} value={selector}>{selector}</option>
                        ))}
                    </Select>
                </Grid>
            </FormControl>
        </div>
    );
};

export default DropDown;