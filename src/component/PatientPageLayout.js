import { Col, Container, Form, InputGroup } from "react-bootstrap"
import DoctorCard from "./DoctorCard"
import Row from "react-bootstrap/Row"
import { useState } from "react"
import Badge from "react-bootstrap/Badge"
import { Search } from "@mui/icons-material"
import ClearIcon from '@mui/icons-material/Clear';
import URL from "./APIURL"

const PatientPageLayout = ({ sessionId }) => {

  let [symptoms, setSymtoms] = useState([]);
  let [suggestedSymptoms, setSuggestedSymptoms] = useState("");
  let [doctors, setDoctors] = useState([]);
  let [searchText, setSearch] = useState("");
  let [searchDuration, setSearchDuration] = useState(0);
  let [searchDoctor, setSearchDoctor] = useState("");

  const searchSymptom = async (e) => {
    e.preventDefault();
    if (searchDuration === 0) {
      alert("Please enter the duration of the symptom");
      return;
    }
    setSymtoms([...symptoms, searchText]);

    const symptomObj = {
      "symptom_name": searchText,
      "duration": searchDuration,
      "added_by": "patient",
    };

    const symptomResponse = await fetch(`${URL}//session/symptoms/${sessionId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(symptomObj),
    });

    const symtomData = await symptomResponse.json();
    console.log(symtomData);

    if (symtomData.success === false) {
      alert(symtomData.message);
      return;
    }

    let temp = '';

    symtomData.correlated_symptoms.map((symptom) => {
      temp += symptom + '/';
    });
    setSuggestedSymptoms(temp);

    const doctorResponse = await fetch(`${URL}//session/suggested_doctors/${sessionId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const doctorData = await doctorResponse.json();
    console.log(doctorData);

    if (doctorData.success === false) {
      alert(doctorData.message);
      return;
    }

    setDoctors(doctorData.suggested_doctors);

    setSearch("");
  }

  const removeSymptom = (id) => {
    console.log(id);
    let newSymptoms = symptoms.filter((symptom, index) => index !== id);
    setSymtoms(newSymptoms);
    setSearchDuration(0);
  }

  const searchDoctors = (e) => {
    e.preventDefault();
    console.log(searchDoctor);
  }

  return (
    <>
      <Row>
        <Container className="mb = 10" style={{ height: "100%" }}>
          <h4>Insert your symptom</h4>
          <Form onSubmit={searchSymptom}>
            <Row>
              <InputGroup size="sm" className="mb-3">
                <Col xs={2}>
                  <Form.Control
                    required={true}
                    placeholder={suggestedSymptoms}
                    aria-describedby="basic-addon2"
                    onChange={(e) => setSearch(e.target.value)}
                    value={searchText}
                  />
                </Col>
                <Col xs={1}></Col>
                <Col xs={2}>
                  <Form.Control
                    required={true}
                    type="number"
                    placeholder="Duration"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setSearchDuration(e.target.value)}
                  />
                </Col>
                <Col xs={1}></Col>
                <Col xs={3}>
                  <Form.Control
                    style={{ width: "fit-content" }}
                    type="submit"
                  />
                </Col>
              </InputGroup>
            </Row>

          </Form>
          <Row className="m-2">
            {symptoms.map((symptom, index) => (
              <>
                <Badge onClick={() => removeSymptom(index)} id={index} style={{ width: "fit-content" }} pill bg="dark">
                  {symptom}
                  <span style={{ cursor: "pointer" }} className="ml-2">
                    <ClearIcon />
                  </span>
                </Badge>
                &nbsp;
                &nbsp;
              </>
            ))
            }
          </Row>
          <Row>
            <p>{suggestedSymptoms === "" ? null : "Suggested: " + suggestedSymptoms}</p>
          </Row>
        </Container>
      </Row>
      <Row>
        <Container className="mb = 10" style={{ height: "100px" }}>
          <h4>Find a Doctor</h4>
          <Form onSubmit={searchDoctors}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon2"><Search /></InputGroup.Text>
              <Form.Control
                placeholder="Search"
                aria-describedby="basic-addon2"
                onChange={(e) => setSearchDoctor(e.target.value)}
                value={searchDoctor}
              />
            </InputGroup>
          </Form>
        </Container>
      </Row>
      <Row>
        <Container>
          <h4>Available Doctors</h4>
          {doctors.length === 0 ? "Please specify more details to find a doctor." : doctors.map((doctor) => (<DoctorCard doctorDetails={doctor} />))}
        </Container>
      </Row>
    </>
  )
}

export default PatientPageLayout
