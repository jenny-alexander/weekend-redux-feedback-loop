import React from 'react';
import axios from 'axios';
import './App.css';
import Main from '../Main/Main';
import Feelings from '../Feelings/Feelings'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      {/* <Main /> */}
      <BrowserRouter>
        <Routes>
            <Route path='/' element ={<Main />}></Route>
            <Route path='/feelings' element ={<Feelings />}></Route>
            {/* <Route path='/understanding' element ={<Feedback type="understanding"/>}></Route>
            <Route path='/support' element ={<Feedback type="support"/>}></Route>
            <Route path='/comments' element ={<Feedback type="comments"/>}></Route> */}
            {/* <Route path='/review' element ={<Review/>}></Route> */}
            {/* <Route path='/admin' element ={<Admin/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
