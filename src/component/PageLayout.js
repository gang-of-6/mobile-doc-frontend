import { Container, Form } from "react-bootstrap"
import DoctorDetails from "./DoctorDetails"
import DoctorCard from "./DoctorCard"

const PageLayout = () => {
  return (
    <Container>
        <Container className="mb = 10">
            <h4>Find a Doctor</h4>
            <Form.Control type="text" placeholder="Search" />
        </Container>

        <Container>
            <h4>Doctors</h4>
            {DoctorDetails.map((doctor) => (
            <DoctorCard doctorDetails={doctor} />
        ))}
        </Container>
    </Container>
  )
}

export default PageLayout
