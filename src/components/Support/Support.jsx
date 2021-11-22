import react from "react";
import {useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import Header from '../Header/Header';
import { Container, Grid, Card, CardContent, Rating, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import GlobalCSS from '../GlobalCSS/GlobalCSS'

function Support( props ) {
    const dispatch = useDispatch();
    const supportRating = useSelector( store=>store.support );
    const [ support, setSupport ] = useState( supportRating );
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
                                        How well are you being supported?
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <Rating name="simple-controlled"
                                                size="large"
                                                value={ support }
                                                precision={1}
                                                onChange={ ( event, newValue ) => { setSupport( newValue ) } } />
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                                        <Link className={globalClasses.link} to="/understanding" style={{ textDecoration: 'none' }}>
                                            <Button variant="contained" size="large"
                                                sx={{ height: 60, width: 90, mt:5, mr: 5 }}>
                                                Back
                                            </Button>    
                                        </Link>
                                        <Link className={globalClasses.link} to="/comments" style={{ textDecoration: 'none' }}>
                                            <Button variant="contained" 
                                                    size="large"
                                                    disabled={ support > 0 ? false : true }
                                                    onClick={ ()=>dispatch( { type: 'ADD_SUPPORT', payload: support } ) }
                                                    sx={{ height: 60, width: 90, mt:5 }}>
                                                    Next
                                            </Button>
                                        </Link>
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

export default Support;