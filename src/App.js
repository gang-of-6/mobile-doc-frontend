import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //This is very important for design

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Patient from './pages/Patient';
import Doctor from './pages/Doctor';
import DoctorPrescribe from './pages/DoctorPrescribe';

import Index from './component/Index';
import PatientDashboard from './component/PatientDashboard';
import HealthRecords from './component/HealthRecords';
import PatientRecords from './component/PatientRecords';
import Appointment from './component/Appointment';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/patient"  element={<Patient forPatient={true} />} />
          <Route path="/patient/dashboard" element={<PatientDashboard forPatient={true} />} />
          <Route path="/patient/healthRecords" element={<HealthRecords forPatient={true} />} />
          <Route path="/patient/patientRecords" element={<PatientRecords forPatient={true} />} />
          <Route path="/patient/appointments" element={<Patient forPatient={true} />} />

          <Route path="/doctor" element={<Doctor forPatient={false} />} />
          <Route path="/doctor/patientView" element={<Patient forPatient={false} />} />
          <Route path="/doctor/prescribe" element={<DoctorPrescribe forPatient={false} />} />
          <Route path="/doctor/dashboard" element={<PatientRecords forPatient={false} />} />
          <Route path="/doctor/appointments" element={<Appointment forPatient={false} />} />
          <Route path="/doctor/patientRecords" element={<HealthRecords forPatient={false} />} />
          <Route path="/doctor/healthRecords" element={<PatientRecords forPatient={false} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
