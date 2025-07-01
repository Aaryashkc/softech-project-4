import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Career from './pages/Career';
import Achievements from './pages/Achievements';
import Vision from './pages/Vision';
import Personal from './pages/Personal';
import Contact from './pages/Contact';


function App() {
  
  return (
    <Router>
      <Header/>
      <div className="min-h-screen bg-white">
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;