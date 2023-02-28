import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from 'react';
import MedicineForm from './MedicineForm';

function PrescriptionForm() {
  // var count = 1;
  // var rows = [], i = 0;
  // while (++i <= count) rows.push(i);

  const [medicineForms, setMedicineForms] = useState([]);
  const [numberOfMedicine, setNumberOfMedicine] = useState(0);
  const addMedicine = (e) => {
    setNumberOfMedicine(numberOfMedicine + 1)
    setMedicineForms([...medicineForms,numberOfMedicine])
  }

  return (
    <Container style={{ marginTop: "40px" }}>
      <Row>
        {/* {medicineForms.map(item => ({
            <MedicineForm index={item}/>
          }))} */}
        {medicineForms.map( item => <MedicineForm index={item}/>)}
      </Row>
      <Row>
        <Col><Button>Finish</Button></Col>
        <Col><Button onClick={addMedicine}>Add More</Button></Col>
      </Row>
    </Container>
  );
}

export default PrescriptionForm;