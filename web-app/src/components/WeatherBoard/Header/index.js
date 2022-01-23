import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './styles.js';

const Header = ({ classes }) => (
    <h1 className={classes.Heading}>
        <span className={classes.Light}>Weather</span> Monitoring
    </h1>
);

export default withStyles(styles)(Header);