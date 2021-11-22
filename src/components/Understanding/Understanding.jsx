import react from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import Header from '../Header/Header';
import { Container, Grid, Card, CardContent, Rating, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import GlobalCSS from '../GlobalCSS/GlobalCSS'

function Understanding( props ) {
    const dispatch = useDispatch();
    const understandingRating = useSelector( store => store.understanding );
    const [ understanding, setUnderstanding ] = useState( understandingRating );
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
                                    How well are you understanding the content?
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                    <Rating name="simple-controlled"
                                            size="large"
                                            value={understanding}
                                            onChange={(event, newValue) => { setUnderstanding(newValue) } }/>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <Button variant="contained" 
                                            size="large"
                                            sx={{ height: 60, width: 90, mt:5, mr: 5 }}>
                                    <Link className={globalClasses.link} to="/feeling">Back</Link>
                                    </Button>    
                                    <Button variant="contained" 
                                            size="large"
                                            onClick={ ()=>dispatch( { type: 'ADD_UNDERSTANDING', payload: understanding } ) }
                                            sx={{ height: 60, width: 90, mt:5 }}>
                                            <Link className={globalClasses.link} to="/support">Next</Link>
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

export default Understanding;