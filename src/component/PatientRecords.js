import Sidebar from "./Sidebar"
import { Row, Col } from "react-bootstrap"

const PatientRecords = ( {forPatient} ) => {
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
}

export default PatientRecords
