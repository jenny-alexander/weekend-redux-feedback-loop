import Header from '../Header/Header';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import GlobalCSS from '../GlobalCSS/GlobalCSS'

function Main( props ) {
    const globalClasses = GlobalCSS();

    return (
        <div>
            <Header />
            <body>        
                <Container>
                    <Grid container direction="column" alignItems= 'center'>
                        <Grid item xs={12}>
                            <Card elevation={3} className={globalClasses.card} sx={{border:1}}>                                  
                                <CardContent >
                                    <Typography sx={{fontSize: '30px', mt: 3}} className={globalClasses.question}>
                                        Tell me about your learning experience today.
                                    </Typography>
                                    <Box className={globalClasses.box}>
                                        <Link className={globalClasses.link} to="/feeling">
                                            <Button variant="contained" 
                                                    size="large"                           
                                                    sx={{ height: 60, width: 90, mt:7 }}>
                                                Start
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

export default Main;