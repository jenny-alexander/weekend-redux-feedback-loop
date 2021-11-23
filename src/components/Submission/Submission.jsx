import {useDispatch } from 'react-redux';
import { useState } from "react";
import Header from '../Header/Header';
import { Container, Grid, Card, CardContent, 
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
                            <Card className={globalClasses.card} elevation={3} sx={{border:1}}>
                                <CardContent>
                                    <Typography sx={{ p:2, textAlign: 'center', fontSize: '30px' }} >
                                        Feedback Received!
                                    </Typography>                            
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Link className={globalClasses.link} to="/">
                                            <Button variant="contained" 
                                                    size="large"
                                                    sx={{ height: 60, width: 210, mt:5 }}>
                                                Leave New Feedback
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

export default Submission;