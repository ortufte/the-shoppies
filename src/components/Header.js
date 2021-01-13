import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import TheatersIcon from '@material-ui/icons/Theaters';

const Header = () => {
    return (
        <AppBar position="static" >
            <Toolbar>
                <Typography variant="h3">The Shoppies</Typography>
                <TheatersIcon fontSize="large" color="secondary"/>
            </Toolbar>
        </AppBar>
    )
}

export default Header