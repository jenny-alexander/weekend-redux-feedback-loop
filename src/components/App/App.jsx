import React from 'react';
import axios from 'axios';
import './App.css';
import Main from '../Main/Main';
import Feelings from '../Feelings/Feelings'
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submission from '../Submission/Submission';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import GlobalCSS from '../GlobalCSS/GlobalCSS'
// import { Button } from '@mui/material';

function App() {

  // const globalClasses = GlobalCSS();

  return (
    <div className='App'>
      {/* <Button className={globalClasses.redButton} variant="contained">
        Red Button
      </Button> */}
      {/* <Main /> */}
      <BrowserRouter>
        <Routes>
            <Route path='/' element ={<Main />}></Route>
            <Route path='/feelings' element ={<Feelings />}></Route>
             <Route path='/understanding' element ={<Understanding/>}></Route>
             <Route path='/support' element ={<Support/>}></Route>
             <Route path='/comments' element ={<Comments/>}></Route>
            <Route path='/review' element ={<Review/>}></Route>
            <Route path='/submission' element ={<Submission/>}></Route>
            {/* <Route path='/admin' element ={<Admin/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
