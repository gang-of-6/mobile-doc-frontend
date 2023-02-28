import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import Sidebar from "../component/Sidebar";
import { useSearchParams } from "react-router-dom";
import {Container} from "react-bootstrap";
import PrescriptionForm from "../component/PrescriptionForm";

const DoctorPrescribe = ({ forPatient }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  return (
    <>
      <Row>
        <Col xs={2}>
          <Sidebar forPatient={forPatient} />
        </Col>
        <Col>
          <Container style={{ marginLeft: "10px" }}>
            <PrescriptionForm sessionId = {sessionId} />
          </Container>
        </Col>
      </Row>
    </>
  )
};

export default DoctorPrescribe;
