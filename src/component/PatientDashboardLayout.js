import { Col, Container, Row } from "react-bootstrap"

import WatchLaterIcon from '@mui/icons-material/WatchLater';

import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import SummarizeIcon from '@mui/icons-material/Summarize';
import CakeIcon from '@mui/icons-material/Cake';
import HeightIcon from '@mui/icons-material/Height';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import DangerousIcon from '@mui/icons-material/Dangerous';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

import Details from "./Details";

import { useState, useEffect } from "react";
import URL from "./APIURL";

const PatientDashboardLayout = () => {

    const [data, setData] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    const handleArrowClick = () => {
        setShowDetails(!showDetails);
    };

    useEffect(() => {
        fetch(URL + "patient/EHR/0001")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);

    return (
        <>
            <Row style={{ marginTop: "40px" }}>
                <Col xs={9}>
                    <Row>
                        <h2>Hello {data == null ? "" : data.patient_details.name}</h2>
                        <h6>Here is an overview of your activity</h6>
                        {console.log(data)}
                    </Row>
                    <Row>
                        <Container>
                            <h4>General Information</h4>
                            <br />
                            <Row>
                                <Col>
                                    <HomeIcon /> {data == null ? "" : data.patient_details.address}
                                </Col>
                                <Col>
                                    <MailIcon /> {data == null ? "" : data.patient_details.email}
                                </Col>
                                <Col>
                                    <WorkIcon /> {data == null ? "" : data.patient_details.profession}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <CakeIcon /> {data == null ? "" : data.patient_details.date_of_brth}
                                </Col>
                                <Col>
                                    <BloodtypeIcon /> {data == null ? "" : data.patient_details.general_information.blood_group}
                                </Col>
                                <Col>
                                    <HeightIcon /> {data == null ? "" : data.patient_details.physical_attributes[0].value}
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <SmokingRoomsIcon /> Smoking : {data == null ? "" : (data.patient_details.general_information.smoking_history == null ? "No" : "Yes")}
                                </Col>
                                <Col>
                                    <DangerousIcon /> Allergies:  {data == null ? "" : data.patient_details.general_information.allergies}
                                </Col>
                                <Col>
                                    <DirectionsRunIcon /> Diabetes: {data == null ? "" : (data.patient_details.general_information.diabetes == null ? "No" : "Yes")}
                                </Col>

                            </Row>

                        </Container>
                    </Row>
                    <Row>
                        <Container>
                            <h4>Test Reports</h4>
                            <br />
                            <Container style={{ marginLeft: "10px" }}>
                                {data == null ? "" : data.test_results.length > 0 && data.test_results.map((item, index) => (
                                    <>
                                    
                                    <Row>
                                        <Container style={{ maxWidth: "900px", backgroundColor: "#F9F9F9" }}>
                                            <Row>
                                                <Col xs={1}>
                                                    <SummarizeIcon fontSize="large" />
                                                </Col>
                                                <Col xs={3}>
                                                    <h6>{item.test_name}</h6>
                                                </Col>
                                                <Col xs={1}>
                                                    <WatchLaterIcon fontSize="large" />
                                                </Col>
                                                <Col xs={5}>
                                                    <p>{item.date}</p>
                                                </Col>
                                                <Col>
                                                    <span style={{ cursor: "pointer" }} onClick={handleArrowClick}>{showDetails ? "▲" : "▼"}</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Row>
                                    <Row>
                                        {showDetails && <Details details={item}/>}
                                    </Row>
                                    </>
                                ))}
                            </Container>
                        </Container>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default PatientDashboardLayout
