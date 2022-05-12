import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Archive from '../Archive';
import Article from '../Article';
import NotFound from '../NotFound';
import React from 'react';

export default function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/archive' element={<Archive />} />
      <Route path='/article/:id' element={<Article />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
