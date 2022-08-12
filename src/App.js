import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>

  );
}

export default App;
