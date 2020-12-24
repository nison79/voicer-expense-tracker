import React from 'react'
import { Card , CardContent, CardHeader , Typography , Grid , Divider } from '@material-ui/core'

import Form from './Form/Form'
import useStyles from './styles'


const Main = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title = "Expense Tracker" subheader="Powered by Speechly" />
            <CardContent>
                <Typography align="center" variant="h5">Total Balance $100</Typography>
                <Typography variant="subtitle1" style ={{ lineHeight:'1.5rem' , marginTop:'20px' }}>
                    Try saying : Add income from $50 in Category Salary for Monday ...
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        {/* <List />}*/}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
