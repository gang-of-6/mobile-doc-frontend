import AssignmentIcon from '@mui/icons-material/Assignment';
import EventIcon from '@mui/icons-material/Event';
import PaymentsIcon from '@mui/icons-material/Payments';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

const DoctorDetails = [
    {
      name: "Mr Doctor",
      speciality : "Cardiologist",
      details: "<Dashboard />",
      dateDetails: "dasboard",
      timeDetails: "Dashboard",
      icon: <DashboardOutlinedIcon />
    },
    {
      name: "Mr Doctor",
      speciality : "Cardiologist",
      details: "<Appointment />",
      dateDetails: "appointments",
      timeDetails: "Appointments",
      icon: <EventIcon />
    },
    {
      name: "Mr Doctor",
      speciality : "Cardiologist",
      details: "<HealthRecords />",
      dateDetails: "healthRecords",
      timeDetails: "Health Records",
      icon: <AssignmentIcon />
    },
    {
      name: "Mr Doctor",
      speciality : "Cardiologist",
      details: "<Payment />",
      dateDetails: "payment",
      timeDetails: "Payment",
      icon: <PaymentsIcon />
    }
  ];
  
  export default DoctorDetails;