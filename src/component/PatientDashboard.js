import Sidebar from "../component/Sidebar"
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import PatientDashboardLayout from "./PatientDashboardLayout";


const PatientDashboard = ({ forPatient }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  return (
    <>
      <Row>
        <Col xs={2}>
          <Sidebar forPatient={forPatient} />
        </Col>
        <Col>
            <PatientDashboardLayout sessionId={sessionId} />
        </Col>
      </Row>
    </>
  )
}

export default PatientDashboard