import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core'

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths,lastUpdate } }) => {
    if(!confirmed){
        return 'Carregando...';
    }
    return (
        <div className={StylesProvider.container}>
            <Grid container={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infectados</Typography>
                        <Typography variant="h5">{confirmed.value}</Typography>
                        <Typography color="textSecondary">Data atual</Typography>
                        <Typography variant="body2">Casos ativos de COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recuperados</Typography>
                        <Typography variant="h5">{recovered.value}</Typography>
                        <Typography color="textSecondary">Data atual</Typography>
                        <Typography variant="body2">Número de casos de recuperação COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Mortes</Typography>
                        <Typography variant="h5">{deaths.value}</Typography>
                        <Typography color="textSecondary">Data atual</Typography>
                        <Typography variant="body2">Número de mortes de COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;