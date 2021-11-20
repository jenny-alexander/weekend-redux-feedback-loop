import react from "react";
import {useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import Header from '../Header/Header';
import { Container, Grid, Card, CardContent, TextField, 
         Typography, Button, Box, TextareaAutosize } from '@mui/material';
//BEGIN TESTING FOR LIST
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
//END TESTING FOR LIST
import { Link } from 'react-router-dom';
import GlobalCSS from '../GlobalCSS/GlobalCSS'
import { fontFamily } from "@mui/system";

function Review( props ) {
    //reducer
    const dispatch = useDispatch();
    // get feedback values from the store
    const feedback = useSelector( store => store.feedback );
    const globalClasses = GlobalCSS();

    let feelingsRating,
          understandingRating,
          supportRating = 0;
    let comments = '';

    for( let i = 0; i < feedback.length; i ++ ) {
        //Must be a better way to do this but running out of time
        //I look at the 0 index for each object key/value since we only ever keep one
        //value feeling/understanding/support 
        let key = Object.keys(feedback[i])[0];
        let value = Object.values(feedback[i])[0];   
        
        switch ( key ) {
            case 'feelings':
                feelingsRating = value;
            case 'understanding':
                understandingRating = value;
            case 'support':
                supportRating = value;
            case 'comments':
                comments = value;
                console.log( `comments are:`, comments );
            default:
                //nothing since we already set default to 0 above
        }
    }
    const createStarIcons=( number )=>{
        let icons = [];
        for ( let i = 0; i < number; i++ ) {
            icons.push(<StarIcon sx={{ color: '#EBC51B' }}/>)
        }
        return icons;
    }

    return (
        <div>
            <Header />
            <body>        
                <Container>
                <Grid container 
                      direction='column'
                      alignItems= 'center'>
                    <Grid item xs={12}>
                    <Card className={globalClasses.reviewCard}>
                        <CardContent>
                            <Typography className={globalClasses.question}
                                        sx={{ fontSize: 30}}>
                                Review Your Feedback
                            </Typography>
                                 <List sx={{ maxWidth: 650, bgcolor: 'background.paper' }}>
                                    <ListItem>
                                        <ListItemText primary="Feelings:" 
                                                      disableTypography='true'
                                                      className={globalClasses.listItemText}/>
                                        <ListItemIcon sx={{minWidth: 300 }}>
                                            { createStarIcons( feelingsRating )}
                                        </ListItemIcon>
                                    </ListItem>
                                    <ListItem >
                                        <ListItemText primary="Understanding:" 
                                                      disableTypography='true'
                                                      className={globalClasses.listItemText}/>
                                        <ListItemIcon sx={{ minWidth: 300 }}>
                                            { createStarIcons( understandingRating )}
                                        </ListItemIcon>
                                    </ListItem>
                                    <ListItem >
                                        <ListItemText primary="Support:" 
                                                      disableTypography='true'
                                                      className={globalClasses.listItemText}/>
                                        <ListItemIcon sx={{minWidth: 300 }}>
                                            { createStarIcons( supportRating )}
                                        </ListItemIcon>
                                    </ListItem>
                                </List> 
                                <Grid justifyContent="left" item xs zeroMinWidth>
                                    <h4 sx={{ marginTop: 0, textAlign: "left" }}>Comments:</h4>
                                    <p sx={{ textAlign: "left"}}>{comments}</p>
                                </Grid>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'}}>
                                <Button 
                                    variant="contained" 
                                    size="large"
                                    sx={{
                                        height: 60,
                                        width: 90,
                                        m:3}}>
                                    <Link className={globalClasses.link} to="/comments">Back</Link>
                                </Button>  
                                <Button 
                                    variant="contained" 
                                    size="large"
                                    sx={{
                                        height: 60,
                                        width: 90,
                                        m:3}}>
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

export default Review;