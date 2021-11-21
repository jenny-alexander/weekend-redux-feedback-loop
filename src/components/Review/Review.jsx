import react from "react";
import {useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import axios from 'axios';
import Header from '../Header/Header';
import { Container, Grid, Card, CardContent,
         Typography, Button, Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import GlobalCSS from '../GlobalCSS/GlobalCSS'

function Review( props ) {
    //reducer
    const dispatch = useDispatch();
    // get feedback values from the store
    const feelingRating = useSelector( store => store.feeling );
    const understandingRating = useSelector( store => store.understanding );
    const supportRating = useSelector( store => store.support );
    const comments = useSelector( store => store.comments );

    const globalClasses = GlobalCSS();

    // useEffect(() => {
    //     console.log(`in useEffect`)
    //     getFeedbackFromStore();
    // }, [])

    // // let feelingsRating,
    // //     understandingRating,
    // //     supportRating = 0;
    // // let comments = '';

    // const getFeedbackFromStore = ()=>{
    //     for( let i = 0; i < feedback.length; i ++ ) {
    //         //Must be a better way to do this but running out of time
    //         //I look at the 0 index for each object key/value since we only ever keep one
    //         //value feeling/understanding/support 
    //         let key = Object.keys(feedback[i])[0];
    //         let value = Object.values(feedback[i])[0];   
    //         console.log( `in feedback switch with feedback:`, feedback)
    //         switch ( key ) {
    //             case 'feelings':
    //                 // feelingsRating = value;
                    
    //                 setNewFeedback( {...newFeedback, feeling: value } )
    //                 console.log( `in feelings switch with:`, newFeedback )
    //             case 'understanding':
    //                 // understandingRating = value;
    //                 setNewFeedback( {...newFeedback, understanding: value } )
    //                 console.log( `in understanding switch with:`, newFeedback )
    //             case 'support':
    //                 // supportRating = value;
    //                 setNewFeedback( {...newFeedback, support: value } )
    //                 console.log( `in support switch with:`, newFeedback )
    //             case 'comments':
    //                 // comments = value;
    //                 setNewFeedback( {...newFeedback, comments: value } )
    //                 console.log( `in comments switch with:`, newFeedback )
    //             default:
    //                 //nothing since we already set default to 0 above
    //         }
    //     }
    // }

    const createStarIcons=( number )=>{
        let icons = [];
        for ( let i = 0; i < number; i++ ) {
            icons.push(<StarIcon sx={{ color: '#EBC51B' }}/>)
        }
        return icons;
    }
    const onSubmit=( )=>{
        //create the feedback object to pass to server
        let newFeedback = {
            feeling: feelingRating,
            understanding: understandingRating,
            support: supportRating,
            comments: comments
        }
        //Create the feedback object to send to the server
        console.log( `in onSubmit with feedback:`, newFeedback );
        axios.post( `/feedback`, newFeedback ).then( ( response )=>{
            console.log( response )
        }).catch( ( error )=>{
            alert( 'Error adding new task!' );
            console.log( error );
        })
        //Clear out store if axios call is successful
        //dispatch( { type: 'EMPTY_FEEDBACK', payload: [] } );
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
                                                { createStarIcons( feelingRating )}
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
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <Button variant="contained" 
                                                size="large"
                                                sx={{ height: 60, width: 90, m:3}}>
                                            <Link className={globalClasses.link} to="/comments">Back</Link>
                                        </Button>  
                                        <Button variant="contained" 
                                                size="large"
                                                sx={{ height: 60, width: 90, m:3}}
                                                onClick={onSubmit}>                                        
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