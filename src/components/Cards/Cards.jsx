import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core'

import styles from './Cards.module.css';

const Cards = (props) => {
    console.log(props);

    return (
        <div className={StylesProvider.container}>
            <Grid container={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;