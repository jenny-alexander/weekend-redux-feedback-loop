import react from "react";
import {useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import Header from '../Header/Header';
import { Container, Grid, Card, CardContent, TextField, 
         Typography, Button, Box } from '@mui/material';
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

function Review( props ) {
    //reducer
    const dispatch = useDispatch();
    // get feedback values from the store
    const feedback = useSelector( store => store.feedback );
    const globalClasses = GlobalCSS();

    let feelingsStars,
          understandingStars,
          supportStars = 0;
    let comments = '';

    for( let i = 0; i < feedback.length; i ++ ) {
        //Must be a better way to do this but running out of time
        //I look at the 0 index for each object key/value since we only ever keep one
        //value feeling/understanding/support 
        let key = Object.keys(feedback[i])[0];
        let value = Object.values(feedback[i])[0];   
        switch ( key ) {
            case 'feelings':
                feelingsStars = value;
            case 'understanding':
                understandingStars = value;
            case 'support':
                supportStars = value;
            case 'comments':
                comments = value;
            default:
                //nothing since we already set default to 0 above
        }
    }
    const createStarIcons=( number )=>{
        let icons = [];
        for ( let i = 0; i < number; i++ ) {
            icons.push(<StarIcon/>)
        }
        return icons;
    }

    return (
        <div>
            <p>{JSON.stringify( feedback )}</p>
            <Header />
            <body>        
                <Container>
                <Grid 
                    container 
                    direction='column'
                    alignItems= 'center'            
                >
                    <Grid item xs={12}>
                    <Card className={globalClasses.reviewCard}>
                        <CardContent>
                            <Typography className={globalClasses.question}>
                                Review Your Feedback
                            </Typography>

{/** Enter a grid of sorts here to display the values entered by the user */}
<List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="feedback"
    >
      <ListItem disablePadding alignItems="center">
        <ListItemButton>
          <ListItemText primary="Feelings" 
          sx={{border:1 }}/>
          <ListItemIcon sx={{border:1 }}>
            { createStarIcons( feelingsStars )}
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Understanding" sx={{border:1 }}/>
          <ListItemIcon sx={{border:1 }}>
            { createStarIcons( understandingStars )}
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Support" sx={{border:1 }}/>
          <ListItemIcon sx={{border:1 }}>
            { createStarIcons( supportStars )}
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Comments" sx={{border:1 }}/>
          <ListItemText sx={{border:1 }}>Hello</ListItemText>
        </ListItemButton>
      </ListItem>            
    </List>
{/** Buttons to display */}
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

export default Review;