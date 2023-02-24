import Sidebar from "../component/Sidebar"
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";

const Doctor = ({ forPatient }) => {
  return (
    <>
      <Row>
        <Col xs={2}>
          <Sidebar forPatient={forPatient} />
        </Col>
        <Col>
            <h1>Hello Doctor</h1>
        </Col>
      </Row>
    </>
  )
}

export default Doctor
