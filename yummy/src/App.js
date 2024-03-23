// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from "./components/Menu";
import Catering from './components/catering';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
    <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/catering" element={<Catering/>} />
    </Routes>
  </Router>
  );
}

export default App;
