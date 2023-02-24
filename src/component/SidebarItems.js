import Dashboard from "./Dashboard";
import Appointment from "./Appointment";
import HealthRecords from "./HealthRecords";
import Payment from "./Payment";

import AssignmentIcon from '@mui/icons-material/Assignment';
import EventIcon from '@mui/icons-material/Event';
import PaymentsIcon from '@mui/icons-material/Payments';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

const SidebarItems = [
  {
    path: "/dashboard",
    element: <Dashboard />,
    state: "dasboard",
    displayText: "Dashboard",
    icon: <DashboardOutlinedIcon />
  },
  {
    path: "/appointments",
    element: <Appointment />,
    state: "appointments",
    displayText: "Appointments",
    icon: <EventIcon />
  },
  {
    path: "/healthRecords",
    element: <HealthRecords />,
    state: "healthRecords",
    displayText: "Health Records",
    icon: <AssignmentIcon />
  },
  {
    path: "/payment",
    element: <Payment />,
    state: "payment",
    displayText: "Payment",
    icon: <PaymentsIcon />
  }
];

export default SidebarItems;