import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import BackgroundLines from './components/BackgroundLines';
import About from './pages/About';
import './styles/main.scss';
import Footer from './components/section/Footer';
import ScrollToAnchor from './components/ScrollToAnchor';

function App() {
  return (
    <div className='content-wrapper'>
      <div className='content'>
        <BackgroundLines />
        <Router basename='/RB_Portfolio'>
          <ScrollToAnchor />
          <Routes>
            <Route exact path="/"  element ={<LandingPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
};

export default App;
