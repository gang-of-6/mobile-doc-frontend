import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

const DoctorCard = ({ doctorDetails }) => {
    return (
        <Card className="mb-4">
            <Card.Header as="h5"> 
                <div> <PersonIcon/> {doctorDetails.name}</div> 
                <div><CalendarMonthIcon/> <Link>Select Date</Link></div> 
                <div> <WatchLaterIcon/> <Link> Select Time</Link> </div>
            </Card.Header>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                    {doctorDetails.designation},{doctorDetails.speciality}
                </Card.Subtitle>
                <Card.Text>
                    Doctor Registration Number: {doctorDetails.doctor_id}
                </Card.Text>
                <Button variant="primary" component={Link} to={`/doctor/${doctorDetails.doctor_id}`}>
                    View Profile
                </Button>
            </Card.Body>
        </Card>
    );
};

export default DoctorCard;  
