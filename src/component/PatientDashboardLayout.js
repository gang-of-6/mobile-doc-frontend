import { Col, Container, Row } from "react-bootstrap"

import PersonIcon from '@mui/icons-material/Person';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import DownloadIcon from '@mui/icons-material/Download';

import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import CakeIcon from '@mui/icons-material/Cake';
import HeightIcon from '@mui/icons-material/Height';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';

import UpcomingPatientList from "./UpcomingPatientList";

import Buttons from "./Buttons";

import { useState, useEffect } from "react";
import URL from "./APIURL";

const PatientDashboardLayout = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(URL + "patient/0001")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, []);
    
    return (
        <>
            <Row style={{ marginTop: "40px" }}>
                <Col xs={9}>
                    <Row>
                        <h2>Hello {data == null ? "" : data.patient.name}</h2>
                        <h6>Here is an overview of your activity</h6>
                        {console.log(data)}
                    </Row>
                    <Row>
                        <Container>
                            <h4>General Information</h4>
                            <br />
                            <Row>
                                <Col>
                                    <HomeIcon/> {data == null ? "" : data.patient.address}
                                </Col>
                                <Col>
                                    <MailIcon/> {data == null ? "" : data.patient.email}
                                </Col>
                                <Col>
                                    <WorkIcon/> {data == null ? "" : data.patient.profession}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <CakeIcon/> {data == null ? "" : data.patient.date_of_brth}
                                </Col>
                                <Col>
                                    <BloodtypeIcon/> {data == null ? "" : data.patient.general_information.blood_group}
                                </Col>
                                <Col>
                                    <HeightIcon/> {data == null ? "" : data.patient.physical_attributes[0].value}
                                </Col>
                                
                            </Row>
                            
                        </Container>
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

export default PatientDashboardLayout
