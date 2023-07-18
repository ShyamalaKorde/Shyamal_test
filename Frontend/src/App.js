
import './App.css';
//import Category from './Category';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import Product from './Product';
import Login from './Login';
import Home from './Home';
import Category from './Category';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/home" element={<Home />} />
          <Route path='/category' element={<Category />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
