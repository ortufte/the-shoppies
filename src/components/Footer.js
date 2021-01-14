import React from 'react';
import { BottomNavigation } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Information from './Information'

const Footer = () => {
    return (
        <div>
            <BottomNavigation >
                <IconButton color="secondary" href="https://github.com/ortufte/the-shoppies" aria-label="go to GitHub">
                    <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton color="secondary" href="https://www.linkedin.com/in/olivia-tufte/"  aria-label="go to LinkedIn">
                    <LinkedInIcon fontSize="large" />
                </IconButton>
                <Information />
            </BottomNavigation>
        </div>
    )
}

export default Footer;

