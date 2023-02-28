import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from 'react';
import MedicineForm from './MedicineForm';
import Form from 'react-bootstrap/Form';
import TestForm from './TestForm';

function PrescriptionForm() {
  const [medicineForms, setMedicineForms] = useState([]);
  const [numberOfMedicine, setNumberOfMedicine] = useState(0);

  const [testForms, setTestForms] = useState([]);
  const [numberOfTest, setNumberOfTest] = useState(0);

  const addMedicine = async (e) => {
    setNumberOfMedicine(numberOfMedicine + 1);
    setMedicineForms([...medicineForms, numberOfMedicine]);
  }

  const addTest = async (ev) => {
    setNumberOfTest(numberOfTest + 1);
    setTestForms([...testForms, numberOfTest])
  }

  const submitPrescriptionForm = async (ev) => {
    ev.preventDefault();
    console.dir(ev);
  }

  return (
    <Container style={{ marginTop: "40px" }}>
        <Row>
            <h2>Prescription</h2>
        </Row>
        <Row>
            <Form.Group className="mb-3" controlId="formBasicEmail" id="diagnosis">
                <Form.Label> Diagnosis </Form.Label>
                <Form.Control type="text" placeholder="Enter patient diagnosis" />
                <Form.Text className="text-muted"> Diagnosis </Form.Text>
            </Form.Group>
        </Row>
        <Row>
            <Form.Group className="mb-3" controlId="formBasicEmail" id="advice">
                <Form.Label> Advice </Form.Label>
                <Form.Control type="text" placeholder="Enter patient diagnosis" />
                <Form.Text className="text-muted"> Advice </Form.Text>
            </Form.Group>
        </Row>
        <Row>
            {testForms.map(index => <TestForm index={index} />)}
            <Col><Button onClick={addTest}>Add Test</Button></Col>
        </Row>
      <Row>
            {medicineForms.map(index => <MedicineForm index={index} />)}
            <Col><Button onClick={addMedicine}>Add Medicine</Button></Col>
      </Row>
      <Row>
        <Col><Button onClick={submitPrescriptionForm}>Finish</Button></Col>
      </Row>
    </Container>
  );
}

export default PrescriptionForm;