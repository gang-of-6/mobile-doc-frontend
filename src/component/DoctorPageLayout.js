import { Col, Container, Row } from "react-bootstrap"

import PersonIcon from '@mui/icons-material/Person';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import DownloadIcon from '@mui/icons-material/Download';

import { Button } from "@mui/material";

const DoctorPageLayout = () => {

    const upcomingList = [
        {
            name: "Dr. John Doe",
            time: "10:00 AM"
        },
        {
            name: "Dr. John Doe",
            time: "10:00 AM"
        },
        {
            name: "Dr. John Doe",
            time: "10:00 AM"
        },
        {
            name: "Dr. John Doe",
            time: "10:00 AM"
        },
    ]

    return (
        <>
            <Row style={{ marginTop: "40px" }}>
                <Col xs={9}>
                    <Row>
                        <h2>Hello Doctor</h2>
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
                                    <h3>Dr. John Doe</h3>
                                </Col>
                                <Col>
                                    <Button variant="contained">
                                        Finish
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                    <Row>
                        <Container>
                            <h4>Up coming</h4>
                            <br />
                            <Container style={{ marginLeft: "10px" }}>
                                {upcomingList.map((item, index) => (
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
                                                    <Button>
                                                        <DownloadIcon />
                                                    </Button>
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
