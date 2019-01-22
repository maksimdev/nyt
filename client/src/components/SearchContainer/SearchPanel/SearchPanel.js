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
            className="searchField"
            label="NYT"
            placeholder="Search articles"
            fullWidth
            variant="outlined"
            InputLabelProps={{
                shrink: true,
            }}
        />
        <Button variant="contained" color="primary">
            Search
        </Button>
    </Paper>
    );
};