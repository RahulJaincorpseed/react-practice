import { Route, Routes } from 'react-router';
import './App.css';
import Toaster from './common/Toast/Toaster';
import CounterExample from './Counter/CounterExample';
import AllProducts from './Products/AllProducts';
import SingleProduct from './Products/SingleProduct';
import UserTable from './common/DataTable/UserTable';
import UserTableWithApi from './common/DataTable/UserTableWithApi';

function App() {
  return (
    <div className="App">
      <h1>Code Start...</h1>
      <Routes>
        <Route path="/" element={<div>Home Page</div>}/>
        <Route path="/toast" element={<Toaster />}/>
        <Route path="/counter" element={<CounterExample />}/>
        <Route path="/products" element={<AllProducts />}/>
        <Route path="/products/:id" element={<SingleProduct />}/>
        <Route path="/table" element={<UserTable />}/>
        <Route path="/tab" element={<UserTableWithApi />}/>
        <Route path="/tab/:id" element={<div>single page</div>}/>
      </Routes>
    </div>
  );
}

export default App;
