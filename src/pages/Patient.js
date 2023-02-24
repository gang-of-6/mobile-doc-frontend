import Sidebar from "../component/Sidebar"
import Row from "react-bootstrap/Row";
import PageLayout from "../component/PageLayout";
import { Col } from "react-bootstrap";


const Patient = () => {
  return (
    <>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col>
            <PageLayout />
        </Col>
      </Row>
    </>
  )
}

export default Patient