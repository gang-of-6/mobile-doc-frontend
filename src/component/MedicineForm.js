import Form from 'react-bootstrap/Form';

function MedicineForm ({ index }) {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Medicine {{index}} </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    Medicine Name
                </Form.Text>
            </Form.Group>
        </Form>
    )
}

export default MedicineForm;

