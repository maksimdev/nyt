import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './SearchPanel.css';

export function SearchPanel(props) {
    return (
      <Paper className="searchPanel">
        <TextField
            id="search"
            value={props.value}
            className="searchField"
            label="NYT"
            placeholder="Search articles"
            fullWidth
            variant="outlined"
            InputLabelProps={{
                shrink: true,
            }}
            onChange={props.textFieldHandler}
        />
        <Button variant="contained" color="primary" onClick={props.search}>
            Search
        </Button>
    </Paper>
    );
};