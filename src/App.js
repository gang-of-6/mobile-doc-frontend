import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //This is very important for design

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Patient from './pages/Patient';
import Doctor from './pages/Doctor';

import Index from './component/Index';
import PatientDashboard from './component/PatientDashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/patient" element={<Patient forPatient={true} />} />
          <Route path="/doctor" element={<Doctor forPatient={false} />} />
          <Route path="/doctor/patientView" element={<Patient forPatient={false} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
