import React from 'react';
import Grid from '@mui/material/Grid';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

import DayMatrix from '../components/dayMatrix'
import TimeMatrix from "../components/timeMatrix"

const characterName = { 'aria-label': 'description' };

const CharacterSearch = () => {
    const [server, setServer] = React.useState('');

    const handleChange = (event) => {
        setServer(event.target.value);
    };

    //// ADD IN VALIDATIONS,,, LVL should be 1 - 125, name VARCAR ONLY
    //// FIX inputProps on input feilds

    return (
        <main>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <span>Server:</span>
                    <div>
                        <Select
                            id="serverDD"
                            label="Server"
                            defaultValue="select">
                            <MenuItem value='skyfire'>Skyfire</MenuItem>
                            <MenuItem value='other'>Other</MenuItem>
                            <MenuItem value='another'>Another</MenuItem>
                            <MenuItem value='select'>Select One</MenuItem>
                        </Select>
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <span>Name:</span>
                    <div>
                        <Input placeholder="Character Name" inputProps={characterName} />
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <span>Level:</span>
                    <div>
                        <Input type="number" defaultValue="125" placeholder="Any Level" inputProps={characterName} />
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <span>Resolve:</span>
                    <div>
                        <Input fullWidth type="number" placeholder="Will return characters that have equal to or greater this resolve" inputProps={characterName} />
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <span>Role:</span>
                    <div>
                        <Select
                            id="RoleDD"
                            label="Role"
                            defaultValue="any">
                            <MenuItem value='tank'>Tank</MenuItem>
                            <MenuItem value='healer'>Healer</MenuItem>
                            <MenuItem value='dps'>DPS</MenuItem>
                            <MenuItem value='powerfeed'>Powerfeed</MenuItem>
                            <MenuItem value='utility'>Utility</MenuItem>
                            <MenuItem value='any'>Any Role</MenuItem>
                        </Select>
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <span>Class:</span>
                    <div>
                        <Select
                            id="classDD"
                            label="Class"
                            defaultValue="any">
                            <MenuItem value='shadowknight'>Shadowknight</MenuItem>
                            <MenuItem value='templar'>Templar</MenuItem>
                            <MenuItem value='beastlord'>Beastlord</MenuItem>
                            <MenuItem value='any'>Any Class</MenuItem>
                        </Select>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <DayMatrix />
                </Grid>
                <Grid item xs={6}>
                    <TimeMatrix />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="success">Search Characters</Button>
                </Grid>
            </Grid>
        </main>
    )
}


export default CharacterSearch;