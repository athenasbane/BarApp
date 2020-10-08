import React from 'react';

import { 
    FormControl, 
    InputLabel, 
    Select,
    Grid,

} from '@material-ui/core';

const TableDropDown = (props) => (
        <div>
            <FormControl>
                <Grid container direction="column">
                    <Grid container item>
                        <Grid item xs={6}>
                            <InputLabel>
                                Table:
                            </InputLabel>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Select native value={props.tableSelection} onChange={(e) => props.setTableSelection(e.target.value)}>
                            <option aria-label="None" value=" " defaultValue/>
                            {props.tableData.map(selector => {
                                if (selector.tableActive) {
                                    return <option key={selector._id} 
                                        value={selector.tableNum}>
                                            {selector.tableNum}
                                            </option>
                                }
                                return <option key={selector._id} 
                                    disabled value={selector.tableNum}>
                                    Unavailable - {selector.tableNum}
                                    </option>
                                }
                            )}
                        </Select>
                    </Grid>
                </Grid>
            </FormControl>
        </div>
    );

export default TableDropDown;