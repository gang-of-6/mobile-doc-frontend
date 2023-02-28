import Sidebar from "../component/Sidebar"
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import DoctorPageLayout from "../component/DoctorPageLayout";
import { useSearchParams } from "react-router-dom";

const Doctor = ({ forPatient }) => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  return (
    <>
      <Row>
        <Col xs={2}>
          <Sidebar forPatient={forPatient} />
        </Col>
        <Col>
            <DoctorPageLayout sessionId={sessionId}/>
        </Col>
      </Row>
    </>
  )
}

export default Doctor
