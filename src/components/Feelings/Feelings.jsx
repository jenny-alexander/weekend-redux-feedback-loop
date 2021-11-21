import react from "react";
import {useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import Header from '../Header/Header';
import { Container, Grid, Card, CardContent, Rating, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import GlobalCSS from '../GlobalCSS/GlobalCSS';

function Feeling( props ) {
    
    const dispatch = useDispatch();
    const [ feeling, setFeeling ] = useState( 0 );
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
                                <Typography sx={{fontSize: '30px', mt:3 }} className={globalClasses.question}>
                                    How are you feeling today?
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                    <Rating name="simple-controlled"
                                            size="large"
                                            value={feeling}
                                            onChange={(event, newValue) => { setFeeling(newValue) }} />
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Button variant="contained" 
                                            size="large"
                                            sx={{ height: 60, width: 90, mt:5, mr: 5 }}>
                                            <Link className={globalClasses.link} to="/">Back</Link>
                                    </Button>    
                                    <Button variant="contained" 
                                            size="large"
                                            onClick={ ()=>dispatch( { type: 'ADD_FEELING', payload: feeling } ) }
                                            sx={{ height: 60, width: 90, mt:5 }}>
                                        <Link className={globalClasses.link} to="/understanding">Next</Link>
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

export default Feeling;