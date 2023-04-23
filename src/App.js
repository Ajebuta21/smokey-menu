import React from 'react'
import { Routes, Route } from "react-router-dom";
import Drinks from './pages/Drinks';
import Food from './pages/Food';
import Mainpage from './pages/Mainpage';

const App = () => {
  return <>
    <Routes>
      <Route path='/' element={<Mainpage/> } />
      <Route path='/food-menu' element={<Food/> } />
      <Route path='/drinks-menu' element={<Drinks/> } />
  </Routes>
  </>;
}

export default App