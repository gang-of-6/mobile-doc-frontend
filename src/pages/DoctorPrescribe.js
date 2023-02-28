import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import Sidebar from "../component/Sidebar";
import { useSearchParams } from "react-router-dom";

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
            <h1>
              This page is under maintenance
            </h1>
        </Col>
      </Row>
    </>
  )
};

export default DoctorPrescribe;
