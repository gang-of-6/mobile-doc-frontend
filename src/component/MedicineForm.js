import Form from 'react-bootstrap/Form';

function MedicineForm ({ index }) {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail" id="medicine">
                <Form.Label>Medicine {index} </Form.Label>
                <Form.Control type="text" placeholder="Enter Medicine" />
                <Form.Text className="text-muted">
                    Medicine Name
                </Form.Text>
            </Form.Group>
        </Form>
    )
}

export default MedicineForm;

