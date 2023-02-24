import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //This is very important for design

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Patient from './pages/Patient';
import Doctor from './pages/Doctor';

import Index from './component/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/doctor" element={<Doctor />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
