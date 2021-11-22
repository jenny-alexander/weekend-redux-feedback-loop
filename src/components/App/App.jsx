import React from 'react';
import './App.css';
import Main from '../Main/Main';
import Feeling from '../Feelings/Feelings'
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submission from '../Submission/Submission';
import Admin from '../Admin/Admin';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  // const globalClasses = GlobalCSS();

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
            <Route path='/' element ={<Main />}></Route>
            <Route path='/feeling' element ={<Feeling />}></Route>
            <Route path='/understanding' element ={<Understanding/>}></Route>
            <Route path='/support' element ={<Support/>}></Route>
            <Route path='/comments' element ={<Comments/>}></Route>
            <Route path='/review' element ={<Review/>}></Route>
            <Route path='/submission' element ={<Submission/>}></Route>
            <Route path='/admin' element ={<Admin/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
