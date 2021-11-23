import {useDispatch, useSelector } from 'react-redux';
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
            support: supportRating
            //comments: comments
        }
        //only include comments if they are not empty (otherwise, empty array appears in db)
        if ( comments.length > 0 ) {
            newFeedback.comments = comments;
        }

        axios.post( `/feedback`, newFeedback ).then( ( response )=>{ 
        }).catch( ( error )=>{
            alert( 'Error adding new task!' );
            console.log( error );
        })
        //Clear out store if axios call is successful
        dispatch( { type: 'EMPTY_FEEDBACK', payload: [] } );
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
                            <Card className={globalClasses.reviewCard} elevation={3} sx={{border:1}}>
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
                                        <Link className={globalClasses.link} to="/comments">
                                            <Button variant="contained" 
                                                    size="large"
                                                    sx={{ height: 60, width: 90, m:3}}>Back
                                            </Button>  
                                        </Link>
                                        <Link className={globalClasses.link} to="/submission">
                                            <Button variant="contained" 
                                                    size="large"
                                                    sx={{ height: 60, width: 90, m:3}}
                                                    onClick={onSubmit}>                                        
                                                Submit
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

export default Review;