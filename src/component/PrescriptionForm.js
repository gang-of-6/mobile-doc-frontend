import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from 'react';

function PrescriptionForm() {
  // var count = 1;
  // var rows = [], i = 0;
  // while (++i <= count) rows.push(i);

  const [medicine, setMedicine] = useState(1);
  const addMedicine = (e) => {
    setMedicine(medicine + 1)
  }
  var rows = [];
  var i = 0;
  while (++i <= medicine) rows.push(i);
  return (
    // <Form>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" />
    //     <Form.Text className="text-muted">
    //       We'll never share your email with anyone else.
    //     </Form.Text>
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //     <Form.Check type="checkbox" label="Check me out" />
    //   </Form.Group>
    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>
    <Container style={{ marginTop: "40px" }}>
      <Row>
        {rows.map(function (i) {
          return <h1 key={i} index={i}>Hello?</h1>;
        })}
      </Row>
      <Row>
        <Col><Button>Finish</Button></Col>
        <Col><Button onClick={addMedicine}>Add More</Button></Col>
      </Row>
    </Container>
  );
}

export default PrescriptionForm;