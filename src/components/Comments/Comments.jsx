import react from "react";
import {useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import Header from '../Header/Header';
import { Container, Grid, Card, CardContent, TextField, 
         Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import GlobalCSS from '../GlobalCSS/GlobalCSS'

function Comments( props ) {
    //reducer
    const dispatch = useDispatch();
    const commentsFromStore = useSelector( store=>store.comments );
    const [ comments, setComments ] = useState( commentsFromStore );
    const globalClasses = GlobalCSS();

    const handleChange = ( event )=> {
        setComments( event.target.value )
    }

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
                                    <Typography sx={{ p:2, textAlign: 'center', fontSize: '30px' }}>
                                        Any comments you'd like to leave?
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <TextField aria-label='empty textarea'
                                                defaultValue={commentsFromStore}
                                                placeholder='Share your thoughts here...'
                                                style={{ width: 600, fontSize: 17, fontFamily:'Roboto'}}
                                                align="center"
                                                onChange={ ( event ) => handleChange( event )}/>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Button variant="contained" 
                                                size="large"
                                                sx={{ height: 60, width: 90, mt:3, mr: 5 }}>
                                        <Link className={globalClasses.link} to="/support">Back</Link>
                                        </Button>    
                                        <Button variant="contained" 
                                                size="large" 
                                                onClick={ ()=>dispatch( { type: 'ADD_COMMENTS', payload: comments } ) }
                                                sx={{ height: 60, width: 90, mt:3 }}>
                                        <Link className={globalClasses.link} to="/review">Next</Link>
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

export default Comments;