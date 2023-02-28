import Dashboard from "./Dashboard";
import Appointment from "./Appointment";
import HealthRecords from "./HealthRecords";
import PatientRecords from "./PatientRecords";

import AssignmentIcon from '@mui/icons-material/Assignment';
import EventIcon from '@mui/icons-material/Event';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

const SidebarItems = [
  {
    path: "/dashboard",
    element: <Dashboard />,
    state: "dasboard",
    displayText: "Dashboard",
    icon: <DashboardOutlinedIcon />,
    forPatient: true
  },
  {
    path: "/appointments",
    element: <Appointment />,
    state: "appointments",
    displayText: "Appointments",
    icon: <EventIcon />,
    forPatient: true
  },
  {
    path: "/healthRecords",
    element: <HealthRecords />,
    state: "healthRecords",
    displayText: "Health Records",
    icon: <AssignmentIcon />,
    forPatient: true
  },
  {
    path: "/patientRecords",
    element: <PatientRecords />,
    state: "patientRecords",
    displayText: "Patient Records",
    icon: <AssignmentIcon />,
    forPatient: false
  },
];

export default SidebarItems;