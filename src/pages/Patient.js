import Sidebar from "../component/Sidebar"
import Row from "react-bootstrap/Row";
import PatientPageLayout from "../component/PatientPageLayout";
import { Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const Patient = ({ forPatient }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  return (
    <>
      <Row>
        <Col xs={2}>
          <Sidebar forPatient={forPatient} />
        </Col>
        <Col>
            <PatientPageLayout sessionId={sessionId} />
        </Col>
      </Row>
    </>
  )
}

export default Patient