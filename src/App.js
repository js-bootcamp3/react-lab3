import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './components/Header/Header';
import Contacts from './pages/Contacts/Contacts';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
      <footer>
        <hr/>
        <div>Created by Mansur Mabo</div>
      </footer>
    </div>

  );
}

export default App;
