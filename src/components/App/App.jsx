import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { fontSize } from '@mui/system';

function App() {

  const onClick = ( ) => {
    console.log( `in onClick!` );
  }

  return (
    <div className='App'>
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
                    Tell me about your learning experience.
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
                      }}
                    >Start</Button>
                  </Box>     
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </body>
    </div>
  );
}

export default App;
