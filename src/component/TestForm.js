import Form from 'react-bootstrap/Form';

function TestForm ({ index }) {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail" id="test">
                <Form.Label>Tests {index} </Form.Label>
                <Form.Control type="text" placeholder="Enter Test" />
                <Form.Text className="text-muted">
                    Test Name
                </Form.Text>
            </Form.Group>
        </Form>
    )
}

export default TestForm;

