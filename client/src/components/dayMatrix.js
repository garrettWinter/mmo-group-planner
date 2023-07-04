import React from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';

const DayMatrix = () => {
    return (
        <div>
            <span>Day of Week Matrix: (?)</span>
            <Grid>
                <Grid item xs={12}>
                    <FormControlLabel control={<Checkbox />} label="Monday" />
                    <FormControlLabel control={<Checkbox />} label="Tuesday" />
                    <FormControlLabel control={<Checkbox />} label="Wednesday" />
                    <FormControlLabel control={<Checkbox />} label="Thursday" />
                    <FormControlLabel control={<Checkbox />} label="Friday" />
                    <FormControlLabel control={<Checkbox />} label="Saturday" />
                    <FormControlLabel control={<Checkbox />} label="Sunday" />
                </Grid>
            </Grid>
        </div>
    )
}

export default DayMatrix;