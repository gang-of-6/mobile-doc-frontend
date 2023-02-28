import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import PrescriptionForm from "../component/PrescriptionForm";

const DoctorPrescribe = () => {
  return (
    <>
      <Row>
        <Col>
          <h1>Hello</h1>
        </Col>
        <Col xs={5}>
            <Container>
                <PrescriptionForm/>
            </Container>
        </Col>
      </Row>
    </>
  );
};

export default DoctorPrescribe;
