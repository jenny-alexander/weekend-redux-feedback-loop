import react from "react";
import { useState, useEffect } from "react";
import Header from '../Header/Header';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
function Main( props ) {
    //const[ name, setName ] = useState( null ) {
    const onClick = ( ) => {
        console.log( `in onClick!` );
    }

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
                    <Card 
                        sx={{
                        height: 275,
                        width: 700
                        }}
                    >
                        <CardContent>
                        <Typography 
                            sx={{
                            p:2,
                            textAlign: 'center',
                            fontSize: '30px'
                            }}
                        >
                            Tell me about your learning experience today.
                        </Typography>
                        <Box
                            sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',

                            }}
                        >
                            <Button 
                            variant="contained" 
                            size="large"
                            onClick={onClick}
                            sx={{
                                height: 60,
                                width: 90,
                                mt:5
                            }}>
                            <Link to="/main">Back</Link>
                            </Button>     
                                                   
                            <Button 
                            variant="contained" 
                            size="large"
                            onClick={onClick}
                            sx={{
                                height: 60,
                                width: 90,
                                mt:5
                            }}>
                            <Link to="/feelings">Start</Link>
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

export default Main;