import react from "react";
import {useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import Header from '../Header/Header';
import { Container, Grid, Card, CardContent, TextField, 
         Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import GlobalCSS from '../GlobalCSS/GlobalCSS'

function Submission( props ) {
    //reducer
    const dispatch = useDispatch();
    const [ value, setValue ] = useState( 2 );
    const globalClasses = GlobalCSS();

    return (
        <div>
            <Header />
            <body>        
                <Container>
                    <Grid container 
                        direction="column" 
                        alignItems= 'center'>
                        <Grid item xs={12}>
                            <Card className={globalClasses.card}>
                                <CardContent>
                                    <Typography sx={{ p:2, textAlign: 'center', fontSize: '30px' }} >
                                        Feedback Received!
                                    </Typography>                            
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Button variant="contained" 
                                                size="large"
                                                sx={{ height: 60, width: 210, mt:5 }}>
                                            <Link className={globalClasses.link} to="/">Leave New Feedback</Link>
                                        </Button>    
                                    </Box>     
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </body>
        </div>
    )
}

export default Submission;