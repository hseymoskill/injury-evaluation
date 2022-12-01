import { Button, Form, Col, Row } from "react-bootstrap";

function Ankle() {
  return (
    <div className="ankleContainer">
      <h1>Ankle Evaluation</h1>
      <Form className="w-50">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Patient Name</Form.Label>
          <Form.Control type="name" placeholder="Enter patient's name" />
          <Form.Text className="text-muted col-6">
            Please enter patient's full name.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Patient DOB</Form.Label>
          <Form.Control type="date" placeholder="DOB" />
          <Form.Text className="text-muted">
            Please enter patient's date of birth.
          </Form.Text>
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Ankle;
