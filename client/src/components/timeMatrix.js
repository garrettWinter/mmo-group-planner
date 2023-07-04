import React from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';


const TimeMatrix = () => {
    return (
        <div>
            <span>Time of Day Matrix:</span>
            <Grid>
                <Grid item xs={12}>
                    <FormControlLabel control={<Checkbox />} label="Morning (6AM - 11AM)" />
                    <FormControlLabel control={<Checkbox />} label="Mid-Day (12PM - 4PM)" />
                    <FormControlLabel control={<Checkbox />} label="Evening (5PM - 9PM)" />
                    <FormControlLabel control={<Checkbox />} label="Late Night (10PM - 1AM)" />
                    <FormControlLabel control={<Checkbox />} label="Over Night (2AM - 5AM)" />
                </Grid>
            </Grid>
        </div>
    )


}

export default TimeMatrix;