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
                    {doctorDetails.speciality}
                </Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" component={Link} to={`/doctor/${doctorDetails.id}`}>
                    View Profile
                </Button>
            </Card.Body>
        </Card>
    );
};

export default DoctorCard;  
