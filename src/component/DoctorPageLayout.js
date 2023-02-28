import { Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

import PersonIcon from '@mui/icons-material/Person';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import DownloadIcon from '@mui/icons-material/Download';

import UpcomingPatientList from "./UpcomingPatientList";

import Buttons from "./Buttons";

const DoctorPageLayout = ({ sessionId }) => {

    const navigate = useNavigate();
    

    const handleEnd = () => {
        navigate("/doctor/prescribe?session_id=" + sessionId);
    };
    return (
        <>
            <Row style={{ marginTop: "40px" }}>
                <Col xs={9}>
                    <Row>
                        <h2>Hello Doctor Fahmid Azam</h2>
                        <h6>Here is an overview of your activity</h6>
                    </Row>
                    <Row>
                        <Container>
                            <h4>Current</h4>
                            <br />
                            <br />
                            <Row>
                                <Col xs={1}>
                                    <PersonIcon fontSize="large" />
                                </Col>
                                <Col xs={8}>
                                    <h3>Dhrubo Kamal</h3>
                                </Col>
                                <Col>
                                    <Buttons text="End" variant="contained" onClickFunction={handleEnd} />
                                </Col>
                            </Row>
                        </Container>
                    </Row>

                    <Row>

                    </Row>

                    <Row>
                        <Container>
                            <h4>Up coming</h4>
                            <br />
                            <Container style={{ marginLeft: "10px" }}>
                                {UpcomingPatientList.map((item, index) => (
                                    <Row>
                                        <Container style={{ maxWidth: "900px", backgroundColor: "#F9F9F9" }}>
                                            <Row>
                                                <Col xs={1}>
                                                    <PersonIcon fontSize="large" />
                                                </Col>
                                                <Col xs={3}>
                                                    <h6>{item.name}</h6>
                                                </Col>
                                                <Col xs={1}>
                                                    <WatchLaterIcon fontSize="large" />
                                                </Col>
                                                <Col xs={5}>
                                                    <p>{item.time}</p>
                                                </Col>
                                                <Col>
                                                    <Buttons text={<DownloadIcon/>} link="#" />
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Row>
                                ))}
                            </Container>
                        </Container>
                    </Row>
                </Col>
                <Col>
                    <Container>
                        <h4>Previous Patients</h4>
                    </Container>
                </Col>
            </Row>
        </>
    )
}

export default DoctorPageLayout
