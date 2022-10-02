import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';
import Navbar from './components/Navbar';

const App = () => {
  return (
  <BrowserRouter>
  <Box sx={{backgroundColor:'#000'}}>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Feed/>}/>
      <Route path='/video/:id' element={<VideoDetail/>}/>
      <Route path='/video/:id' element={<ChannelDetail/>}/>
      <Route path='/video/:id' element={<SearchFeed/>}/>
    </Routes>
  </Box>
  </BrowserRouter>  
  )
}

export default App