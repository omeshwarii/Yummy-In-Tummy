// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from "./components/Login";
import Register from "./components/Register";
import Menu from "./components/Menu"
function App() {
  return (
    <Router>
      <Navbar></Navbar>
    <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/menu" element={<Menu/>} />
    </Routes>
  </Router>
  );
}

export default App;
