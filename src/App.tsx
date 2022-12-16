import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductCategory from './components/ProductCategory';
import ProductDetails from './components/ProductDetails';
import Home from './pages/Home';
import Page404 from './pages/Page404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:category' element={<ProductCategory />} />
          <Route path='/:category/:id' element={<ProductDetails />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
