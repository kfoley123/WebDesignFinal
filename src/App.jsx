import './App.css'
import Nav from './components/Nav';
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


export default function App() {
  return (
  <BrowserRouter>
    <Nav />
      <div id="main-content">
        <Routes>
          <Route path="/" element={< Main />} />
          <Route path="/about" element={< About />}/>
        </Routes>
      </div>
    <Footer />
  </BrowserRouter>
 
  );
}

