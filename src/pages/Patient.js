import Sidebar from "../component/Sidebar"
import Row from "react-bootstrap/Row";
import PatientPageLayout from "../component/PatientPageLayout";
import { Col } from "react-bootstrap";


const Patient = ({ forPatient }) => {
  return (
    <>
      <Row>
        <Col xs={2}>
          <Sidebar forPatient={forPatient} />
        </Col>
        <Col>
            <PatientPageLayout />
        </Col>
      </Row>
    </>
  )
}

export default Patient