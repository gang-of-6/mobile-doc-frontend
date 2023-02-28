import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import URL from './APIURL';

function PrescriptionForm({ sessionId }) {
  const [diagnosis, setDiagnosis] = useState("");
  const [advice, setAdvice] = useState("");

  const [medicineForms, setMedicineForms] = useState([]);
  const [medicineNames, setMedicineNames] = useState([]);
  const [numberOfMedicine, setNumberOfMedicine] = useState(0);

  const [testForms, setTestForms] = useState([]);
  const [testNames, setTestNames] = useState([]);
  const [numberOfTest, setNumberOfTest] = useState(0);

  const addMedicine = async (e) => {
    setNumberOfMedicine(numberOfMedicine + 1);
    setMedicineForms([...medicineForms, numberOfMedicine]);
    setMedicineNames([...medicineNames, ""]);
  }

  const addTest = async (ev) => {
    setNumberOfTest(numberOfTest + 1);
    setTestForms([...testForms, numberOfTest]);
    setTestNames([...testNames, ""]);
  }

  const setTestAtIdx = async (idx, testName) => {
    let testNamesCopy = [...testNames];
    testNamesCopy[idx] = testName;
    setTestNames([...testNamesCopy]);
    console.log(testNames);
  }

  const setMedicineAtIdx = async (idx, medicineName) => {
    let medicineNamesCopy = [...medicineNames];
    medicineNamesCopy[idx] = medicineName;
    setMedicineNames([...medicineNamesCopy]);
    console.log(medicineNames);
  }

  const submitPrescriptionForm = async (ev) => {
    ev.preventDefault();
    let jsonBody = {
        "Diagonosis": diagnosis, 
        "advice": advice, 
        "suggested_test_list": testNames, 
        "suggested_medicine_list": medicineNames,
    };
    console.log(jsonBody, sessionId);
    const response = await fetch(URL + `session/update_prescription/${sessionId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonBody)
      });
      const data = await response.json();
      console.log(data);
  }

  return (
    <Container style={{ marginTop: "40px" }}>
        <Row>
            <h2>Prescription</h2>
        </Row>
        <Row>
            <Form.Group className="mb-3" controlId="formBasicEmail" id="diagnosis">
                <Form.Label> Diagnosis </Form.Label>
                <Form.Control type="text" placeholder="Enter patient diagnosis" onChange={(ev) => {setDiagnosis(ev.target.value)}} />
                <Form.Text className="text-muted"> Diagnosis </Form.Text>
            </Form.Group>
        </Row>
        <Row>
            <Form.Group className="mb-3" controlId="formBasicEmail" id="advice">
                <Form.Label> Advice </Form.Label>
                <Form.Control type="text" placeholder="Enter advice" onChange={(ev) => {setAdvice(ev.target.value)}} />
                <Form.Text className="text-muted"> Advice </Form.Text>
            </Form.Group>
        </Row>
        <Row>
            {testForms.map(index =>{
                return (
                    <Form.Group className="mb-3" controlId="formBasicEmail" id="test">
                        <Form.Label>Tests {index} </Form.Label>
                        <Form.Control type="text" placeholder="Enter Test" onChange={ev => setTestAtIdx(index, ev.target.value)} />
                        <Form.Text className="text-muted">
                            Test Name
                        </Form.Text>
                    </Form.Group>
                )
            })}
            <Col><Button onClick={addTest}>Add Test</Button></Col>
        </Row>
      <Row>
            {medicineForms.map(index => {
                return (
                    <Form.Group className="mb-3" controlId="formBasicEmail" id="test">
                        <Form.Label>Medicine {index} </Form.Label>
                        <Form.Control type="text" placeholder="Enter Test" onChange={ev => setMedicineAtIdx(index, ev.target.value)} />
                        <Form.Text className="text-muted">
                            Medicine Name
                        </Form.Text>
                    </Form.Group>
                )
                })}
            <Col><Button onClick={addMedicine}>Add Medicine</Button></Col>
      </Row>
      <Row>
        <Col><Button onClick={submitPrescriptionForm}>Finish</Button></Col>
      </Row>
    </Container>
  );
}

export default PrescriptionForm;