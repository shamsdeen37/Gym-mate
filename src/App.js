import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Home from './components/Home';
import Exercises from './components/Exercises';
import Savedexercises from './components/Savedexercises';

const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise" element={<Exercises/>} />
      <Route path="/saved_exercise" element={<Savedexercises/>} />

    </Routes>
  </Box>
);

export default App;
