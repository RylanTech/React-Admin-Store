import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Welcome from './Welcome';
import ListProducts from './ListProducts';
import ProductDetails from './ProductDetails';
import Add from './Add';
import Edit from './Edit';
import Search from './Search';
import Type from './Type';

function App() {
  return (
    <div className='Comp'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route path='/About' element={<About/>}/>
            <Route index element={<Welcome/>}/>
            <Route path='/products' element={<ListProducts/>}>
              <Route path=':productId' element={<ProductDetails/>}/>
              <Route path=":productId/edit" element={<Edit />}/>
            </Route>
            <Route path='/search' element={<Search/>}>
              <Route path=":productId/edit" element={<Edit />}/>
            </Route>
            <Route path='/add' element={<Add/>}/>
            <Route path='/tablets' element={<Type/>}/>
            <Route path='/phones' element={<Type/>}/>
            <Route path='/tvs' element={<Type/>}/>
            <Route path='*' element={<h1>error2</h1>}></Route>
          </Route>
          <Route path='*' element={<h1>error1</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
