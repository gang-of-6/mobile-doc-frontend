import { Container, Form, InputGroup } from "react-bootstrap"
import DoctorDetails from "./DoctorDetails"
import DoctorCard from "./DoctorCard"
import Row from "react-bootstrap/Row"
import { useState } from "react"
import Badge from "react-bootstrap/Badge"
import { Search } from "@mui/icons-material"
import ClearIcon from '@mui/icons-material/Clear';

const PageLayout = () => {

  let [symptoms, setSymtoms] = useState([]);
  let [searchText, setSearch] = useState("");
  let [searchDoctor, setSearchDoctor] = useState("");

  const searchSymptom = (e) => {
    e.preventDefault();
    setSymtoms([...symptoms, searchText]);
    console.log(searchText);
    setSearch("");
  }

  const removeSymptom = (id) => {
    console.log(id);
    let newSymptoms = symptoms.filter((symptom, index) => index !== id);
    setSymtoms(newSymptoms);
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
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon2"><Search /></InputGroup.Text>
              <Form.Control
                placeholder="Search"
                aria-describedby="basic-addon2"
                onChange={(e) => setSearch(e.target.value)}
                value={searchText}
              />
            </InputGroup>
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
          {DoctorDetails.map((doctor) => (
            <DoctorCard doctorDetails={doctor} />
          ))}
        </Container>
      </Row>
    </>
  )
}

export default PageLayout
