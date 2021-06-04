import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';
const cards = ({data}) => {
    if (!data.confirmed) {
        return 'loading..';
    }
    return ( 
        <div className = { styles.container }>
        <Grid container spacing = {3} justify = "center" >
        {/* 1.. */}
            
            
            <Grid item component = { Card } xs = {12} md = { 3 }
            className = {cx(styles.card, styles.infected,styles.card_dec)} >
            <CardContent >
                <Typography color = "textSecondary" gutterBottom> Infected </Typography> 
                <Typography variant = "h5">
                <CountUp start ={ 0 } end = { data.confirmed.value } duration = { 4.5 } separator = "," />
                </Typography> 
                <Typography color = "textSecondary" > { new Date(data.lastUpdate).toDateString() } </Typography> 
                <Typography variant = "body2" > Number of active cases of covid - 19 </Typography> 
            </CardContent> 
            </Grid>
        {/* 2.. */}
            <Grid item component = { Card }xs = { 12 }md = { 3 }
            className = { cx(styles.card, styles.recovered) } >
            <CardContent >
                <Typography color = "textSecondary" gutterBottom > Recovered </Typography> 
                <Typography variant = "h5" >
                <CountUp start = { 0 } end = { data.recovered.value } duration = { 4.5 } separator = "," />
                </Typography> 
                <Typography color = "textSecondary" > { new Date(data.lastUpdate).toDateString() } </Typography> 
                <Typography variant = "body2" > Number of active cases of covid - 19 </Typography> 
            </CardContent> 
            </Grid> 
        {/* 3... */}


            <Grid item component = { Card } xs = {12} md = { 3 } className = { cx(styles.card, styles.deaths) } >
            <CardContent>
                <Typography color = "textSecondary" gutterBottom > Deaths </Typography> 
                <Typography variant = "h5" >
                <CountUp start = { 0 } end = { data.deaths.value } duration = { 4.5 } separator = "," />
                </Typography> 
                <Typography color = "textSecondary" > { new Date(data.lastUpdate).toDateString() } </Typography> 
                <Typography variant = "body2" > Number of active cases of covid - 19 </Typography> 
            </CardContent> 
            </Grid> 
        </Grid> 
        </div>
    )
}
export default cards;