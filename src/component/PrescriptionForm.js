import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from 'react';
import MedicineForm from './MedicineForm';
import Form from 'react-bootstrap/Form';

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

  return (
    <Container style={{ marginTop: "40px" }}>
        <Row>
            <h2>Prescription</h2>
        </Row>
        <Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> Diagnosis </Form.Label>
                <Form.Control type="text" placeholder="Enter patient diagnosis" />
                <Form.Text className="text-muted"> Diagnosis </Form.Text>
            </Form.Group>
        </Row>
        <Row>
            {testForms.map(item => <p>{item}</p>)}
            <Col><Button onClick={addTest}>Add Test</Button></Col>
        </Row>
      <Row>
            {medicineForms.map(item => <p>{item}</p>)}
            <Col><Button onClick={addMedicine}>Add Medicine</Button></Col>
      </Row>
      <Row>
        <Col><Button>Finish</Button></Col>
      </Row>
    </Container>
  );
}

export default PrescriptionForm;