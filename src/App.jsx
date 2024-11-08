import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Services from './components/services';
import About from './components/about';
import Contact from './components/contact';
import PredictFloods from './components/predictFloods';
import Login from './components/login'
import SendAlerts from './components/sendAlerts';
import ProtectedRoute from './components/protectedRoute'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute/>}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/predict" element={<Contact />} />
            <Route path="/services/predict-floods" element={<PredictFloods />} />
            <Route path="/services/send-alerts" element={<SendAlerts/>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
