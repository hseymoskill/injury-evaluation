import { Button, Form, Col, Row } from "react-bootstrap";
import Header from "../../Page/Header";

function Ankle() {
  return (
    <div className="ankleContainer">
      <Header title="Ankle Evaluation" />
      <div className="pageContainer">
        <Form className="w-50">
          <h3>Patient Information</h3>
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
          <h3>Laterality</h3>
          <h3>Inspection</h3>
          <h3>Palpation</h3>
          <h3>MMT</h3>
          <h3>Special Tests</h3>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Ankle;
