import { Button, Form, Col, Row } from "react-bootstrap";
import Header from "../../Page/Header";

function Ankle() {
  return (
    <div className="ankleContainer">
      <Header title="Ankle Evaluation" />
      <div className="pageContainer">
        <Form className="w-50">
          <h3>Patient Information</h3>
          <Form.Group className="mb-3" controlId="text">
            <Form.Label>Patient Name</Form.Label>
            <Form.Control type="name" placeholder="Enter patient's name" />
            <Form.Text className="text-muted col-6">
              Please enter patient's full name.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Patient DOB</Form.Label>
            <Form.Control type="date" placeholder="DOB" />
            <Form.Text className="text-muted">
              Please enter patient's date of birth.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="laterality">
            <Form.Label>Laterality</Form.Label>
            <div key={`inline-radio`} className="mb-3">
              <Form.Check
                inline
                label="Left"
                name="lateralityGroup"
                type="radio"
                id={`inline-radio-left`}
              />
              <Form.Check
                inline
                label="Right"
                name="lateralityGroup"
                type="radio"
                id={`inline-radio-right`}
              />
              <Form.Check
                inline
                label="Bilateral"
                name="lateralityGroup"
                type="radio"
                id={`inline-radio-bilateral`}
              />
            </div>
          </Form.Group>

          <h3>Inspection</h3>

          <Form.Group className="mb-3" controlId="inspectionCheck">
            <Form.Label>Check Applicable Boxes:</Form.Label>
            <div key={`inline-checkbox`} className="mb-3">
              <Form.Check
                inline
                label="Deformity"
                name="inspectionGroup"
                type="checkbox"
                id={`inline-checkbox-deformity`}
              />
              <Form.Check
                inline
                label="Swelling"
                name="inspectionGroup"
                type="checkbox"
                id={`inline-checkbox-swelling`}
              />
              <Form.Check
                inline
                label="Discoloration"
                name="inspectionGroup"
                type="checkbox"
                id={`inline-checkbox-discoloration`}
              />
              <Form.Check
                inline
                label="Scars"
                name="inspectionGroup"
                type="checkbox"
                id={`inline-checkbox-scars`}
              />
              <Form.Check
                inline
                label="Deformity"
                name="inspectionGroup"
                type="checkbox"
                id={`inline-checkbox-deformity`}
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inspectionNotes">
            <Form.Label>Notes</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <h3>Palpation</h3>

          <h3>MMT</h3>

          <Row className="mb-3">
          <Form.Label as={Col}>Dorsiflexion</Form.Label>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Left</Form.Label>
              <Form.Control
              as="select"
              name="leftStrength"
            >
              <option value="5">5</option>
              <option value="4+">4+</option>
              <option value="4">4</option>
              <option value="4-">4-</option>
              <option value="3+">3+</option>
              <option value="3">3</option>
              <option value="3-">3-</option>
              <option value="2+">2+</option>
              <option value="2">2</option>
              <option value="2-">2-</option>
              <option value="1+">1+</option>
              <option value="1">1</option>
              <option value="1-">1-</option>
              <option value="0">0</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Right</Form.Label>
              <Form.Control
              as="select"
              name="rightStrength"
            >
              <option value="5">5</option>
              <option value="4+">4+</option>
              <option value="4">4</option>
              <option value="4-">4-</option>
              <option value="3+">3+</option>
              <option value="3">3</option>
              <option value="3-">3-</option>
              <option value="2+">2+</option>
              <option value="2">2</option>
              <option value="2-">2-</option>
              <option value="1+">1+</option>
              <option value="1">1</option>
              <option value="1-">1-</option>
              <option value="0">0</option>
            </Form.Control>
            </Form.Group>
          </Row>

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
