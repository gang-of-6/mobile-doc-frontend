import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Patient from './pages/Patient';

import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/patient" element={<Patient />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
