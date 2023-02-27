import Sidebar from "../component/Sidebar"
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import DoctorPageLayout from "../component/DoctorPageLayout";

const Doctor = ({ forPatient }) => {
  return (
    <>
      <Row>
        <Col xs={2}>
          <Sidebar forPatient={forPatient} />
        </Col>
        <Col>
            <DoctorPageLayout/>
        </Col>
      </Row>
    </>
  )
}

export default Doctor
