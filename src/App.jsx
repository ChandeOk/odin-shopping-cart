import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import data from './Data';
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='shop' element={<Shop data={data} />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
