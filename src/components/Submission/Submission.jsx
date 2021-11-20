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
                <Grid 
                    container 
                    direction="column" 
                    alignItems= 'center'            
                >
                    <Grid item xs={12}>
                    <Card className={globalClasses.card}>
                        <CardContent>
                            <Typography 
                                sx={{
                                p:2,
                                textAlign: 'center',
                                fontSize: '30px'
                                }}
                            >
                                Review Your Feedback
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'                              
                                }}>
{/** Enter a grid of sorts here to display the values entered by the user */}
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'                              
                                }}>
                                <Button 
                                    variant="contained" 
                                    size="large"
                                    sx={{
                                        height: 60,
                                        width: 90,
                                        mt:3,
                                        mr: 5
                                    }}>
                                    <Link className={globalClasses.link} to="/support">Back</Link>
                                </Button>  
                                <Button 
                                    variant="contained" 
                                    size="large"
                                    sx={{
                                        height: 60,
                                        width: 90,
                                        mt:3,
                                        mr: 5
                                    }}>
                                    <Link className={globalClasses.link} to="/submission">Submit</Link>
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