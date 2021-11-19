import React from 'react';
import axios from 'axios';
import './App.css';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Make Yourself Heard</h1>
        <h2 className='App-subtitle'>Feedback Form</h2>
      </header>
      <body>
        {/* <div id='main'>
          <p>Tell me about your learning experience today.</p>
          <button>Open Up</button>
        </div> */}
        
        <Container>
          <Grid container direction="column">
            <Grid item xs={3}>
              <Card 
                sx={{

                  height: 300,
                  
                }}
              >
                <CardContent>
                  <Typography 
                    variant="body1" 
                    color="textSecondary" 
                    component="p"
                    align = "center"
                  >
                    Tell me about your learning experience.
                  </Typography>

                  <Typography 
                    variant="body1" 
                    color="textSecondary" 
                    component="p"
                    align = "center"
                  >
                    Tell me MORE about your learning experience.
                  </Typography>

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
