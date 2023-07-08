import { Route, Routes } from 'react-router';
import './App.css';
import Toaster from './common/Toast/Toaster';

function App() {
  return (
    <div className="App">
      <h1>Code Start...</h1>
      <Routes>
        <Route path="/" element={<div>Home Page</div>}/>
        <Route path="/toast" element={<Toaster />}/>
      </Routes>
    </div>
  );
}

export default App;
