import react from "react";
import { useState, useEffect } from "react";
import Header from '../Header/Header';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import GlobalCSS from '../GlobalCSS/GlobalCSS'

function Main( props ) {
    //const[ name, setName ] = useState( null ) {
    const globalClasses = GlobalCSS();

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
                    <Card className={globalClasses.card}>
                        <CardContent >
                        <Typography className={globalClasses.question}>
                            Tell me about your learning experience today.
                        </Typography>
                        <Box className={globalClasses.box}>
                            <Button 
                            variant="contained" 
                            size="large"
                            onClick={onClick}                            
                            sx={{
                                height: 60,
                                width: 90,
                                mt:5
                                // backgroundColor: "#826AED"
                            }}>
                            <Link className={globalClasses.link} to="/feelings">Start</Link>
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